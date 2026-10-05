<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B03X&quot;,&quot;href&quot;:&quot;atc/B03X.md&quot;},{&quot;label&quot;:&quot;roxadustat&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Roxadustat_Reki2021_reference&quot;,&quot;label&quot;:&quot;Reki\u0107_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_roxadustat/Roxadustat_Reki2021_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# roxadustat

- **generic name:** roxadustat
- **ATC codes:** `B03XA05`
- **DrugBank:** [DB04847](https://go.drugbank.com/drugs/DB04847) · **PubChem:** [CID 11256664](https://pubchem.ncbi.nlm.nih.gov/compound/11256664)
- **molar mass:** 352.346 g/mol (C19H16N2O5) — DrugBank
- **groups:** approved, investigational

## About

Roxadustat is an antianemic medicine used to treat anemia in people with chronic kidney disease. It is authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27088611](https://www.wikidata.org/wiki/Q27088611) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| roxadustat | parent | 352.346 | C19H16N2O5 | DrugBank | [11256664](https://pubchem.ncbi.nlm.nih.gov/compound/11256664) | Czock_2022, Rekić_2021 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 21:49 | 13:21 | 1/0/8 | 1/0/1 | 0/0/0 | 199,916/49,682 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.625). The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Rekić_2021_reference](drugs/drug_roxadustat/Roxadustat_Reki2021_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Rekić D et al., Pharmacokinetics of Roxadustat: A Popul…, Clinical pharmacokinetics (2021) | [10.1007/s40262-020-00974-z](https://doi.org/10.1007/s40262-020-00974-z) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.909). The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q88, Q32 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Czock_2022_eskd](drugs/drug_roxadustat/Roxadustat_Czock2022_eskd.md) | — | 1-compartment (no model) | 6 | Czock D et al., Clinical Pharmacokinetics and Pharmacod…, Clinical pharmacokinetics (2022) | [10.1007/s40262-021-01095-x](https://doi.org/10.1007/s40262-021-01095-x) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q88, Q32, Q37 — no SI value to buil…</sub><br><sub>route_to: `human_review`</sub> | [Czock_2022_healthy](drugs/drug_roxadustat/Roxadustat_Czock2022_healthy.md) | — | 1-compartment (no model) | 7 | Czock D et al., Clinical Pharmacokinetics and Pharmacod…, Clinical pharmacokinetics (2022) | [10.1007/s40262-021-01095-x](https://doi.org/10.1007/s40262-021-01095-x) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.9). The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q88, Q32 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Czock_2022_healthy_fasting](drugs/drug_roxadustat/Roxadustat_Czock2022_healthy_fasting.md) | — | 1-compartment (no model) | 6 | Czock D et al., Clinical Pharmacokinetics and Pharmacod…, Clinical pharmacokinetics (2022) | [10.1007/s40262-021-01095-x](https://doi.org/10.1007/s40262-021-01095-x) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.9). The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q88, Q32 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Czock_2022_healthy_fed](drugs/drug_roxadustat/Roxadustat_Czock2022_healthy_fed.md) | — | 1-compartment (no model) | 6 | Czock D et al., Clinical Pharmacokinetics and Pharmacod…, Clinical pharmacokinetics (2022) | [10.1007/s40262-021-01095-x](https://doi.org/10.1007/s40262-021-01095-x) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q88, Q32 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Czock_2022_healthy_sca](drugs/drug_roxadustat/Roxadustat_Czock2022_healthy_sca.md) | — | 1-compartment (no model) | 6 | Czock D et al., Clinical Pharmacokinetics and Pharmacod…, Clinical pharmacokinetics (2022) | [10.1007/s40262-021-01095-x](https://doi.org/10.1007/s40262-021-01095-x) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.9). The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q88, Q32 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Czock_2022_liver_cirrhosis_cp_b](drugs/drug_roxadustat/Roxadustat_Czock2022_liver_cirrhosis_cp_b.md) | — | 1-compartment (no model) | 6 | Czock D et al., Clinical Pharmacokinetics and Pharmacod…, Clinical pharmacokinetics (2022) | [10.1007/s40262-021-01095-x](https://doi.org/10.1007/s40262-021-01095-x) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.75). The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q88 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Czock_2022_parameter_value](drugs/drug_roxadustat/Roxadustat_Czock2022_parameter_value.md) | — | 1-compartment (no model) | 6 | Czock D et al., Clinical Pharmacokinetics and Pharmacod…, Clinical pharmacokinetics (2022) | [10.1007/s40262-021-01095-x](https://doi.org/10.1007/s40262-021-01095-x) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q88, Q32 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Czock_2022_severe_renal_impairment](drugs/drug_roxadustat/Roxadustat_Czock2022_severe_renal_impairment.md) | — | 1-compartment (no model) | 6 | Czock D et al., Clinical Pharmacokinetics and Pharmacod…, Clinical pharmacokinetics (2022) | [10.1007/s40262-021-01095-x](https://doi.org/10.1007/s40262-021-01095-x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.926). The first reading is what the record holds.">cross-check: disputed</span> | [Czock_2022_EPO](drugs/drug_roxadustat/pd_Czock_2022_EPO.md) | erythropoetin (EPO) ← roxadustat · direct sigmoid Emax (Hill) effect | — | Czock D et al., Clinical Pharmacokinetics and Pharmacod…, Clinical pharmacokinetics (2022) | [10.1007/s40262-021-01095-x](https://doi.org/10.1007/s40262-021-01095-x) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.926). The first reading is what the record holds.">cross-check: disputed</span> | [Czock_2022_Hb](drugs/drug_roxadustat/pd_Czock_2022_Hb.md) | hemoglobin (delta Hb) ← roxadustat · direct linear effect | — | Czock D et al., Clinical Pharmacokinetics and Pharmacod…, Clinical pharmacokinetics (2022) | [10.1007/s40262-021-01095-x](https://doi.org/10.1007/s40262-021-01095-x) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Takada_2022_LDL_C](drugs/drug_roxadustat/pd_Takada_2022_LDL_C.md) | low-density lipoprotein cholesterol ← roxadustat · indirect response — drug inhibits the production of low-density lipoprotein cholesterol | model (no simulator) | Takada A et al., Pharmacokinetic/pharmacodynamic modelin…, Drug metabolism and pharmac… (2022) | [10.1016/j.dmpk.2022.100461](https://doi.org/10.1016/j.dmpk.2022.100461) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=roxadustat) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCG2` inhibitor | DrugBank actor |
| absorption | liver | `ABCG2` inhibitor | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCG2` inhibitor | DrugBank actor |
| absorption | testis | `ABCG2` inhibitor | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | kidney | `UGT1A9` substrate | DrugBank actor |
| metabolism | liver | `CYP2C8` substrate, `SLCO1B1` inhibitor, `UGT1A9` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC22A6` substrate, `SLC22A8` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: EGLN1 (inhibitor), EGLN2 (inhibitor), EGLN3 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 9  ·  extracted 1  ·  needs_review 8  ·  rejected 0  ·  stale 9
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Rekić_2021.pdf` | Rekić D et al., Pharmacokinetics of Roxadustat: A Popul…, Clinical pharmacokinetics (2021) | popPK | 10 | [10.1007/s40262-020-00974-z](https://doi.org/10.1007/s40262-020-00974-z) | [33486718](https://pubmed.ncbi.nlm.nih.gov/33486718) | The abstract explicitly reports quantitative population PK parameters (CL, Vc, Vp) for roxadustat in humans. |
| `Shen_2024.pdf` | Shen ZW et al., Optimizing the dosing regimen of roxadu…, Journal of pharmaceutical s… (2024) | popPK | 10 | [10.1016/j.xphs.2024.09.004](https://doi.org/10.1016/j.xphs.2024.09.004) | [39251067](https://pubmed.ncbi.nlm.nih.gov/39251067) | The study is a population pharmacokinetic analysis of roxadustat in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Takada_2022_2.pdf` | Takada A et al., Population pharmacokinetics of roxadust…, British journal of clinical… (2022) | popPK | 10 | [10.1111/bcp.15023](https://doi.org/10.1111/bcp.15023) | [34350625](https://pubmed.ncbi.nlm.nih.gov/34350625) | The paper describes a population PK model for roxadustat, but the specific numeric parameter values (CL, V, Q, ka) are not present in the provided evidence text. |

<sub>queue written 2026-10-05T21:36:48.955802+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Shen_2024 | relevant | 10 | 0 | The study is a population pharmacokinetic analysis of roxadustat in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Takada_2022 | irrelevant | 2 | 0 | The study focuses on the pharmacodynamic effect of roxadustat on LDL cholesterol and does not report quantitative pharmacokinetic disposition parameters (CL, V, ka) for roxadustat. |
| popPK | Takada_2022_2 | relevant | 10 | 0 | The paper describes a population PK model for roxadustat, but the specific numeric parameter values (CL, V, Q, ka) are not present in the provided evidence text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-05 21:37 UTC</sub>
