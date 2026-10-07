<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;palbociclib&quot;}]"></div>

# palbociclib

- **generic name:** palbociclib
- **ATC codes:** `L01EF01`
- **DrugBank:** [DB09073](https://go.drugbank.com/drugs/DB09073) · **PubChem:** [CID 5330286](https://pubchem.ncbi.nlm.nih.gov/compound/5330286)
- **molar mass:** 447.5328 g/mol (C24H29N7O2) — DrugBank
- **groups:** approved, investigational

## About

Palbociclib is an anticancer drug used to treat breast cancer, particularly hormone receptor-positive, HER2-negative disease. It is an approved protein kinase inhibitor and is authorised in the European Union for breast cancer treatment.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q15269707](https://www.wikidata.org/wiki/Q15269707) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| palbociclib | parent | 447.533 | C24H29N7O2 | DrugBank | [5330286](https://pubchem.ncbi.nlm.nih.gov/compound/5330286) | Buijs_2025, Marouille_2021, Panetta_2024, Royer_2021 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 04:17 | 10:04 | 1/3/1 | 2/0/4 | 0/0/0 | 255,581/50,239 | openai / gpt-6-luna | 10 | 0/10 | 10/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Marouille_2021_final_final_population_pk_model_with_covariates](drugs/drug_palbociclib/Palbociclib_Marouille2021_final_final_population_pk_model_wi.md) | held back | 1-compartment, oral | 4 | Marouille AL et al., Pharmacokinetic/Pharmacodynamic Model o…, Pharmaceutics (2021) | [10.3390/pharmaceutics13101708](https://doi.org/10.3390/pharmaceutics13101708) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q76, Q27 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Panetta_2024_reference](drugs/drug_palbociclib/Palbociclib_Panetta2024_reference.md) | — | 1-compartment (no model) | 4 | Panetta JC et al., Population Pharmacokinetic and Pharmaco…, Pharmaceutics (2024) | [10.3390/pharmaceutics16121528](https://doi.org/10.3390/pharmaceutics16121528) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Buijs_2025_reference](drugs/drug_palbociclib/Palbociclib_Buijs2025_reference.md) | — | 2-compartment (no model) | 3 (+1 cov.) | Buijs SM et al., Palbociclib exposure in relation to eff…, ESMO open (2025) | [10.1016/j.esmoop.2025.104290](https://doi.org/10.1016/j.esmoop.2025.104290) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Marouille_2021_final](drugs/drug_palbociclib/Palbociclib_Marouille2021_final.md) | — | 1-compartment (no model) | 1 (+1 cov.) | Marouille AL et al., Pharmacokinetic/Pharmacodynamic Model o…, Pharmaceutics (2021) | [10.3390/pharmaceutics13101708](https://doi.org/10.3390/pharmaceutics13101708) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Royer_2021_reference](drugs/drug_palbociclib/Palbociclib_Royer2021_reference.md) | — | 1-compartment (no model) | 4 (+1 cov.) | Royer B et al., Population Pharmacokinetics of Palbocic…, Pharmaceuticals (Basel, Swi… (2021) | [10.3390/ph14030181](https://doi.org/10.3390/ph14030181) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Jian_2022_ANC](drugs/drug_palbociclib/pd_Jian_2022_ANC.md) | absolute neutrophil counts ← palbociclib · delayed effect through transit (transduction) compartments | — | Jian W et al., Starting dose selection of palbociclib…, Cancer chemotherapy and pha… (2022) | [10.1007/s00280-022-04484-6](https://doi.org/10.1007/s00280-022-04484-6) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Polisety_2022_MASTL](drugs/drug_palbociclib/pd_Polisety_2022_MASTL.md) | MASTL kinase activity ← Palbociclib · inhibition effect | — | Polisety A et al., Therapeutic natural compounds Enzastaur…, Medical oncology (Northwood… (2022) | [10.1007/s12032-022-01701-3](https://doi.org/10.1007/s12032-022-01701-3) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Polisety_2022_percentage_of_cell_viability](drugs/drug_palbociclib/pd_Polisety_2022_percentage_of_cell_viability.md) | percentage of cell viability ← Palbociclib · inhibition effect | — | Polisety A et al., Therapeutic natural compounds Enzastaur…, Medical oncology (Northwood… (2022) | [10.1007/s12032-022-01701-3](https://doi.org/10.1007/s12032-022-01701-3) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Marouille_2021_ANC](drugs/drug_palbociclib/pd_Marouille_2021_ANC.md) | absolute neutrophil count ← palbociclib · indirect response — drug inhibits the production of absolute neutrophil count | — | Marouille AL et al., Pharmacokinetic/Pharmacodynamic Model o…, Pharmaceutics (2021) | [10.3390/pharmaceutics13101708](https://doi.org/10.3390/pharmaceutics13101708) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Sun_2017_ANC](drugs/drug_palbociclib/pd_Sun_2017_ANC.md) | absolute neutrophil count biomarker turnover ← palbociclib | — | Sun W et al., Characterization of Neutropenia in Adva…, Journal of clinical pharmac… (2017) | [10.1002/jcph.902](https://doi.org/10.1002/jcph.902) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Yu_2022_Ki67](drugs/drug_palbociclib/pd_Yu_2022_Ki67.md) | Ki67 in skin tissues ← palbociclib · indirect response — drug inhibits the production of Ki67 in skin tissues | model (no simulator) | Yu Y et al., Pharmacodynamic Modeling of CDK4/6 Inhi…, Journal of clinical pharmac… (2022) | [10.1002/jcph.1971](https://doi.org/10.1002/jcph.1971) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Yu_2022_TK1](drugs/drug_palbociclib/pd_Yu_2022_TK1.md) | thymidine kinase 1 in serum ← palbociclib · indirect response — drug inhibits the production of thymidine kinase 1 in serum | model (no simulator) | Yu Y et al., Pharmacodynamic Modeling of CDK4/6 Inhi…, Journal of clinical pharmac… (2022) | [10.1002/jcph.1971](https://doi.org/10.1002/jcph.1971) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Yu_2022_pRb](drugs/drug_palbociclib/pd_Yu_2022_pRb.md) | phosphor-retinoblastoma protein in skin tissues ← palbociclib · indirect response — drug inhibits the production of phosphor-retinoblastoma protein in skin tissues | model (no simulator) | Yu Y et al., Pharmacodynamic Modeling of CDK4/6 Inhi…, Journal of clinical pharmac… (2022) | [10.1002/jcph.1971](https://doi.org/10.1002/jcph.1971) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Zheng_2021_PFS](drugs/drug_palbociclib/pd_Zheng_2021_PFS.md) | progression-free survival ← palbociclib · time-to-event model | — | Zheng J et al., Impact of Dose Reduction on Efficacy: I…, Targeted oncology (2021) | [10.1007/s11523-020-00771-5](https://doi.org/10.1007/s11523-020-00771-5) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=palbociclib) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | liver | `CYP3A4` inhibitor/substrate, `SLC22A1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CDK4 (inhibitor), CDK6 (inhibitor), SULT2A1 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 21 matched, 17 returned
- **screened:** 6  ·  **relevant:** 6
- **records:** 5  ·  extracted 1  ·  needs_review 1  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Yu_2022.pdf` | Yu Y et al., Pharmacodynamic Modeling of CDK4/6 Inhi…, Journal of clinical pharmac… (2022) | popPK | 10 | [10.1002/jcph.1971](https://doi.org/10.1002/jcph.1971) | [34554584](https://pubmed.ncbi.nlm.nih.gov/34554584) | A two-compartment palbociclib PK model is reported, but no numeric PK parameter values appear in the evidence. |
| `Sun_2017.pdf` | Sun W et al., Characterization of Neutropenia in Adva…, Journal of clinical pharmac… (2017) | popPK | 8 | [10.1002/jcph.902](https://doi.org/10.1002/jcph.902) | [28419480](https://pubmed.ncbi.nlm.nih.gov/28419480) | The human palbociclib PK-PD model is relevant, but no numeric parameter values are provided in the evidence. |

<sub>queue written 2026-10-07T04:08:33.639667+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Fu_2022 | irrelevant | 0 | 0 | This is an in-vitro transporter study and reports no quantitative palbociclib disposition parameters. |
| popPK | Hu_2025 | irrelevant | 2 | 1 | Human bioequivalence data report exposure metrics and half-life, but no qualifying disposition parameters or PK model. |
| popPK | Jian_2022 | irrelevant | 2 | 1 | This is a human K-PD neutropenia model and reports no palbociclib disposition parameters. |
| popPK | Polisety_2022 | irrelevant | 0 | 0 | This in-vitro study reports activity and cytotoxicity values, not palbociclib disposition parameters. |
| popPK | Roncato_2022 | irrelevant | 2 | 1 | Human palbociclib concentrations are reported, but no quantitative disposition parameters or PK model values are provided. |
| popPK | Ruiz-Garcia_2017 | irrelevant | 2 | 1 | This human food-effect study reports exposure measures but no quantitative disposition parameters or population-PK model. |
| popPK | Sun_2017 | relevant | 8 | 0 | The human palbociclib PK-PD model is relevant, but no numeric parameter values are provided in the evidence. |
| popPK | Yu_2022 | relevant | 10 | 0 | A two-compartment palbociclib PK model is reported, but no numeric PK parameter values appear in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 04:09 UTC</sub>
