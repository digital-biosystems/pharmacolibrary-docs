<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;talazoparib&quot;}]"></div>

# talazoparib

- **generic name:** talazoparib
- **ATC codes:** `L01XK04`
- **DrugBank:** [DB11760](https://go.drugbank.com/drugs/DB11760) · **PubChem:** [CID 44819241](https://pubchem.ncbi.nlm.nih.gov/compound/44819241)
- **molar mass:** 380.359 g/mol (C19H14F2N6O) — DrugBank
- **groups:** approved, investigational

## About

Talazoparib is a PARP inhibitor anticancer drug used to treat breast cancer. It is approved and authorised in the European Union for breast cancer, though it remains a specialised oncology medicine rather than a widely used drug.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q25100990](https://www.wikidata.org/wiki/Q25100990) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| talazoparib | parent | 380.359 | C19H14F2N6O | DrugBank | [44819241](https://pubchem.ncbi.nlm.nih.gov/compound/44819241) | Guo_2022, Hadigol_2026 |
| enzalutamide | metabolite | 464.437 | C21H16F4N4O2S | PubChem | [15951529](https://pubchem.ncbi.nlm.nih.gov/compound/15951529) | Hadigol_2026 |
| N-desmethyl enzalutamide | metabolite | 450.41 | C20H14F4N4O2S | PubChem | [70678916](https://pubchem.ncbi.nlm.nih.gov/compound/70678916) | Hadigol_2026 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 21:47 | 3:28 | 1/1/5 | 0/0/0 | 0/0/0 | 279,414/23,956 | einfracz / qwen3.8-27b | 5 | 4/1 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Guo_2022_estimate](drugs/drug_talazoparib/Talazoparib_Guo2022_estimate.md) | held back | 1-compartment, oral | 6 | Guo C et al., Evaluation of pharmacokinetics and safe…, British journal of clinical… (2022) | [10.1111/bcp.15294](https://doi.org/10.1111/bcp.15294) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q54, Q27 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Guo_2022_all_patients](drugs/drug_talazoparib/Talazoparib_Guo2022_all_patients.md) | — | 1-compartment (no model) | 7 | Guo C et al., Evaluation of pharmacokinetics and safe…, British journal of clinical… (2022) | [10.1111/bcp.15294](https://doi.org/10.1111/bcp.15294) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q54, Q27 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Guo_2022_mild_hepatic](drugs/drug_talazoparib/Talazoparib_Guo2022_mild_hepatic.md) | — | 1-compartment (no model) | 7 | Guo C et al., Evaluation of pharmacokinetics and safe…, British journal of clinical… (2022) | [10.1111/bcp.15294](https://doi.org/10.1111/bcp.15294) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q54, Q27 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Guo_2022_moderate_hepatic](drugs/drug_talazoparib/Talazoparib_Guo2022_moderate_hepatic.md) | — | 1-compartment (no model) | 7 | Guo C et al., Evaluation of pharmacokinetics and safe…, British journal of clinical… (2022) | [10.1111/bcp.15294](https://doi.org/10.1111/bcp.15294) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q54, Q27 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Guo_2022_normal_hepatic](drugs/drug_talazoparib/Talazoparib_Guo2022_normal_hepatic.md) | — | 1-compartment (no model) | 7 | Guo C et al., Evaluation of pharmacokinetics and safe…, British journal of clinical… (2022) | [10.1111/bcp.15294](https://doi.org/10.1111/bcp.15294) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q54, Q27 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Guo_2022_severe_hepatic](drugs/drug_talazoparib/Talazoparib_Guo2022_severe_hepatic.md) | — | 1-compartment (no model) | 7 | Guo C et al., Evaluation of pharmacokinetics and safe…, British journal of clinical… (2022) | [10.1111/bcp.15294](https://doi.org/10.1111/bcp.15294) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Hadigol_2026_reference](drugs/drug_talazoparib/Talazoparib_Hadigol2026_reference.md) | — | parent + metabolite (no model) | 15 (+5 cov.) | Hadigol M et al., Population Pharmacokinetics Analysis of…, Journal of clinical pharmac… (2026) | [10.1002/jcph.70125](https://doi.org/10.1002/jcph.70125) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=talazoparib) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: PARP1 (inhibitor), PARP2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 7  ·  extracted 1  ·  needs_review 5  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Yu_2020.pdf` | Yu Y et al., Population Pharmacokinetics of Talazopa…, Journal of clinical pharmac… (2020) | popPK | 10 | [10.1002/jcph.1520](https://doi.org/10.1002/jcph.1520) | [31489639](https://pubmed.ncbi.nlm.nih.gov/31489639) | The paper is a primary population pharmacokinetic study for talazoparib in humans, but the specific numeric parameter values (CL, V, etc.) are not explicitly listed in the provided abstract evidence. |

<sub>queue written 2026-10-06T21:44:29.409601+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Hassan_2017 | irrelevant | 0 | 0 | This is a mechanistic pharmacodynamic study using EC50/IC50 in cell lines and xenografts, with no pharmacokinetic parameters reported for talazoparib. |
| popPK | Hoffman_2019 | irrelevant | 4 | 4 | Study is a QTc safety assessment, not a PK study; only non-compartmental CL/F and AUC24 are reported, no compartmental model or V/Q parameters. |
| popPK | Jackson_2024 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of talazoparib's radiosensitizing properties in glioblastoma cells, reporting pharmacodynamic endpoints (EC50, RIR, SER) rather than pharmacokinetic disposition parameters. |
| popPK | Wang_2016 | irrelevant | 1 | 0 | The paper is a medicinal chemistry study reporting in vitro potency and general PK properties but provides no quantitative PK parameter values (CL, V, ka, etc.). |
| popPK | Wang_2026 | irrelevant | 2 | 1 | The paper is a bioequivalence study comparing formulations and uses a pre-existing population PK model for simulation/design, but it does not report new original quantitative PK parameter estimates (CL, V, etc.) for talazoparib, only AUC/Cmax ratios and variability assumptions. |
| popPK | Yu_2020 | relevant | 10 | 4 | The paper is a primary population pharmacokinetic study for talazoparib in humans, but the specific numeric parameter values (CL, V, etc.) are not explicitly listed in the provided abstract evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 21:44 UTC</sub>
