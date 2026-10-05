<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;antithrombin III&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;AntithrombinIii_Kim2020_reference&quot;,&quot;label&quot;:&quot;Kim_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_antithrombin_iii/AntithrombinIii_Kim2020_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# antithrombin III

- **generic name:** antithrombin III
- **ATC codes:** `B01AB02`
- **DrugBank:** [DB11598](https://go.drugbank.com/drugs/DB11598) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Antithrombin III is a blood protein used to treat or prevent excessive clotting, especially in people with antithrombin deficiency, and it works together with heparin. It is an approved medicine, given by infusion, mainly in hospital settings for clotting problems.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q24775482](https://www.wikidata.org/wiki/Q24775482) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 13:41 | 2:41 | 1/2/0 | 0/0/0 | 0/0/0 | 33,619/6,982 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: disputed</span> | [Kim_2020_reference](drugs/drug_antithrombin_iii/AntithrombinIii_Kim2020_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Kim BR et al., Pharmacokinetics of human antithrombin…, British journal of clinical… (2020) | [10.1111/bcp.14200](https://doi.org/10.1111/bcp.14200) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Carlson_1984_reference](drugs/drug_antithrombin_iii/AntithrombinIii_Carlson1984_reference.md) | — | 1-compartment (no model) | 0 | Carlson TH et al., In vivo behavior of radioiodinated rabb…, The Journal of clinical inv… (1984) | [10.1172/JCI111401](https://doi.org/10.1172/JCI111401) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Knot_1987_reference](drugs/drug_antithrombin_iii/AntithrombinIii_Knot1987_reference.md) | — | 1-compartment (no model) | 0 | Knot EA et al., Antithrombin III: biodistribution in he…, Thrombosis and haemostasis (1987) | — |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=antithrombin_iii) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: SERPINC1 (other).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 26 matched, 17 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 3  ·  extracted 1  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Collen_1977.pdf` | Collen D et al., Metabolism of antithrombin III (heparin…, European journal of clinica… (1977) | popPK | 10 | [10.1111/j.1365-2362.1977.tb01566.x](https://doi.org/10.1111/j.1365-2362.1977.tb01566.x) | [65284](https://pubmed.ncbi.nlm.nih.gov/65284) | The paper reports quantitative pharmacokinetic parameters (half-life, fractional catabolic rate, intravascular fraction) for antithrombin III in humans using a two-compartment model. |
| `Kim_2020.pdf` | Kim BR et al., Pharmacokinetics of human antithrombin…, British journal of clinical… (2020) | popPK | 10 | [10.1111/bcp.14200](https://doi.org/10.1111/bcp.14200) | [31840271](https://pubmed.ncbi.nlm.nih.gov/31840271) | The paper reports a population PK model for antithrombin III with specific numeric values for volume of distribution and clearance provided in the abstract. |
| `Aibiki_2007.pdf` | Aibiki M et al., Differences in antithrombin III activit…, Shock (Augusta, Ga.) (2007) | popPK | 9 | [10.1097/shk.0b013e31803422c4](https://doi.org/10.1097/shk.0b013e31803422c4) | [17515857](https://pubmed.ncbi.nlm.nih.gov/17515857) | The study reports a two-compartment PK model for antithrombin III in humans, but specific numeric parameter values (CL, V, t1/2) are not explicitly listed in the provided text, only qualitative comparisons and p-values. |
| `Carlson_1984.pdf` | Carlson TH et al., In vivo behavior of radioiodinated rabb…, The Journal of clinical inv… (1984) | popPK | 9 | [10.1172/JCI111401](https://doi.org/10.1172/JCI111401) | [6376543](https://pubmed.ncbi.nlm.nih.gov/6376543) | The study reports quantitative compartmental fractions and fractional catabolic rates for antithrombin III in rabbits, supporting a three-compartment model. |
| `Knot_1987.pdf` | Knot EA et al., Antithrombin III: biodistribution in he…, Thrombosis and haemostasis (1987) | popPK | 9 | not captured | [3445222](https://pubmed.ncbi.nlm.nih.gov/3445222) | The study reports quantitative pharmacokinetic parameters (half-life, catabolic rate constant) and biodistribution data for antithrombin III in humans using a three-compartment model. |

<sub>queue written 2026-10-05T13:39:00.893588+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aibiki_2007 | relevant | 9 | 2 | The study reports a two-compartment PK model for antithrombin III in humans, but specific numeric parameter values (CL, V, t1/2) are not explicitly listed in the provided text, only qualitative comparisons and p-values. |
| popPK | Raner_2024 | irrelevant | 0 | 0 | The paper is a meta-analysis of heparin and protamine dosing strategies where antithrombin III is only a secondary biomarker, not the subject of a pharmacokinetic model. |
| popPK | Schipper_1982 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for fibrinogen (the subject of the turnover study), not for antithrombin III, which was used as a therapeutic agent to correct deficiency. |
| popPK | Suzuki_2021 | irrelevant | 0 | 0 | The study investigates syndecan-1 as a biomarker for organ dysfunction and lists antithrombin III only as a laboratory outcome variable, not as the subject of a pharmacokinetic analysis. |
| popPK | Völler_2018 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of recombinant asparaginase, not antithrombin III, which is only mentioned as a covariate with no effect on the subject drug's PK. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-05 13:39 UTC</sub>
