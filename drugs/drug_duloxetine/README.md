<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;duloxetine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Duloxetine_Skinner2004_reference&quot;,&quot;label&quot;:&quot;Skinner_2004_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_duloxetine/Duloxetine_Skinner2004_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# duloxetine

- **generic name:** duloxetine
- **ATC codes:** `N06AX21`
- **DrugBank:** [DB00476](https://go.drugbank.com/drugs/DB00476) · **PubChem:** [CID 60835](https://pubchem.ncbi.nlm.nih.gov/compound/60835)
- **molar mass:** 297.415 g/mol (C18H19NOS) — DrugBank
- **groups:** approved, investigational

## About

Duloxetine is an antidepressant (a serotonin–norepinephrine reuptake inhibitor) used for major depressive disorder, anxiety disorders, and nerve-related pain conditions such as diabetic neuropathy and fibromyalgia. It is approved and widely used, with several products authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q411932](https://www.wikidata.org/wiki/Q411932) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| duloxetine | parent | 297.415 | C18H19NOS | DrugBank | [60835](https://pubchem.ncbi.nlm.nih.gov/compound/60835) | Ngo_2020, Skinner_2004 |
| 4-hydroxy duloxetine | metabolite | 313.415 | C18H19NO2S | PubChem | [29981497](https://pubchem.ncbi.nlm.nih.gov/compound/29981497) | Ngo_2020 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-23 21:44 | 1:16 | 0/1/1 | 0/0/0 | 0/0/0 | 21,453/1,189 | ollama / qwen3.8:27b-mtp-q8_0 | 13 | 11/0 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: T6_deviations</sub><br><sub>route_to: `engineer`</sub> | [Skinner_2004_reference](drugs/drug_duloxetine/Duloxetine_Skinner2004_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Skinner MH et al., Effect of age on the pharmacokinetics o…, British journal of clinical… (2004) | [10.1046/j.1365-2125.2003.01963.x](https://doi.org/10.1046/j.1365-2125.2003.01963.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 0.99).">rat</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Ngo_2020_reference](drugs/drug_duloxetine/Duloxetine_Ngo2020_reference.md) | — | parent + metabolite (no model) | 5 (+6 cov.) | Ngo TL et al., Application of an Inter-Species Extrapo…, International journal of mo… (2020) | [10.3390/ijms21051862](https://doi.org/10.3390/ijms21051862) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=duloxetine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor | DrugBank actor |
| distribution | blood | `ALB` target, `ORM1` target | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` inhibitor/substrate, `CYP2B6` inhibitor, `CYP2C19` inhibitor, `CYP2C9` substrate, `CYP2D6` inhibitor/substrate, `CYP3A4` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| — | brain | `SLC6A4` inhibitor | DrugBank actor |
| — | platelet | `SLC6A4` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: SLC6A2 (inhibitor), SLC6A3 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 47 matched, 35 returned
- **screened:** 10  ·  **relevant:** 6
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lobo_2009.pdf` | Lobo ED et al., Population pharmacokinetics of orally a…, Clinical pharmacokinetics (2009) | popPK | 10 | [10.2165/00003088-200948030-00005](https://doi.org/10.2165/00003088-200948030-00005) | [19385712](https://pubmed.ncbi.nlm.nih.gov/19385712) | The paper explicitly reports a population pharmacokinetic model for duloxetine in humans with quantitative parameters including CL/F, Vd/F, ka, and interpatient variability. |
| `Lobo_2014.pdf` | Lobo ED et al., Pharmacokinetics of orally administered…, Clinical pharmacokinetics (2014) | popPK | 10 | [10.1007/s40262-014-0149-y](https://doi.org/10.1007/s40262-014-0149-y) | [24989060](https://pubmed.ncbi.nlm.nih.gov/24989060) | The paper explicitly presents a population pharmacokinetic analysis of duloxetine in pediatric patients, providing quantitative estimates for CL/F, Vd/F, ka, and variability parameters. |
| `Sharma_2000.pdf` | Sharma A et al., Pharmacokinetics and safety of duloxeti…, Journal of clinical pharmac… (2000) | popPK | 9 | [10.1177/00912700022008810](https://doi.org/10.1177/00912700022008810) | [10664922](https://pubmed.ncbi.nlm.nih.gov/10664922) | The paper reports quantitative compartmental pharmacokinetic parameters (CL/F, V/F, ka, and half-life) for duloxetine derived from a one-compartment model in humans. |
| `Tianmei_2007.pdf` | Tianmei S et al., Pharmacokinetics and tolerability of du…, Clinical pharmacokinetics (2007) | popPK | 9 | [10.2165/00003088-200746090-00004](https://doi.org/10.2165/00003088-200746090-00004) | [17713974](https://pubmed.ncbi.nlm.nih.gov/17713974) | The paper explicitly reports quantitative disposition parameters (CL/F, Vss/F, t1/2) and characterizes duloxetine using a one-compartment pharmacokinetic model in healthy human subjects. |

<sub>queue written 2026-07-18T03:44:15.239556+00:00 · relevance threshold 5</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chen_2024 | irrelevant | not captured | not captured | Duloxetine is only a co-administered covariate in a quetiapine population-PK model, with no quantitative pharmacokinetic parameters reported for duloxetine itself. |
| popPK | Furukawa_2018 | irrelevant | not captured | not captured | The paper is a clinical efficacy meta-analysis focusing on depression symptom scores and contains no pharmacokinetic data or modeling for duloxetine. |
| popPK | Wang_2017 | irrelevant | 1 | 1 | This is a clinical efficacy trial for pain in OA and contains no population-PK model or numeric duloxetine disposition parameters; any PK mention is only a general reference to prior studies. |
| popPK | Yuen_2013 | irrelevant | not captured | not captured | The paper focuses on pharmacodynamic modeling of pain scores and relies on an external population PK model for duloxetine concentrations, without reporting new quantitative PK parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-07-15 11:50 UTC</sub>
