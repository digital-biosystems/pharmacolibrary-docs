<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02B&quot;,&quot;href&quot;:&quot;atc/B02B.md&quot;},{&quot;label&quot;:&quot;coagulation factor IX&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;CoagulationFactorIx_Preijers2018_reference&quot;,&quot;label&quot;:&quot;Preijers_2018_reference&quot;,&quot;href&quot;:&quot;drugs/drug_coagulation_factor_ix/CoagulationFactorIx_Preijers2018_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;CoagulationFactorIx_Preijers2022_reference&quot;,&quot;label&quot;:&quot;Preijers_2022_reference&quot;,&quot;href&quot;:&quot;drugs/drug_coagulation_factor_ix/CoagulationFactorIx_Preijers2022_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;CoagulationFactorIx_Goldsmith1992_reference&quot;,&quot;label&quot;:&quot;Goldsmith_1992_reference&quot;,&quot;href&quot;:&quot;drugs/drug_coagulation_factor_ix/CoagulationFactorIx_Goldsmith1992_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# coagulation factor IX

- **generic name:** coagulation factor IX
- **ATC codes:** `B02BD04`
- **DrugBank:** [DB13152](https://go.drugbank.com/drugs/DB13152)
- **groups:** approved, investigational

## About

**Description.** Factor IX (or Christmas factor) is one of the serine proteases of the coagulation system; it belongs to peptidase family S1. Deficiency of this protein causes hemophilia B.

**Indication.** Factor IX is used to treat Christmas disease. Factor IX deficiency is treated by injection factor IX produced from human plasma.

Along with other blood coagulation factors, it is used to reverse acquired coagulation factor deficiency induced by Vitamin K antagonist (VKA, e.g., warfarin) therapy in adult patients with a need for an urgent surgery/invasive procedure.[L50517]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-18 20:19 | 5:15 | 1/1/1 | 1/0/0 | 0/0/0 | 80,220/19,385 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.3). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Preijers_2018_reference](drugs/drug_coagulation_factor_ix/CoagulationFactorIx_Preijers2018_reference.md) | Preijers T et al., Population pharmacokinetics of factor I…, Journal of thrombosis and h… (2018) | [10.1111/jth.14292](https://doi.org/10.1111/jth.14292) |
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.958). The first reading is what the record holds.">cross-check: disputed</span><br><sub>caveat: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only…</sub><br><sub>blocking: model_quarantined: Cl, Vd, k12, k21 left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Preijers_2022_reference](drugs/drug_coagulation_factor_ix/CoagulationFactorIx_Preijers2022_reference.md) | Preijers T et al., In silico evaluation of limited samplin…, European journal of clinica… (2022) | [10.1007/s00228-021-03173-2](https://doi.org/10.1007/s00228-021-03173-2) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.333). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Goldsmith_1992_reference](drugs/drug_coagulation_factor_ix/CoagulationFactorIx_Goldsmith1992_reference.md) | Goldsmith JC et al., Coagulation factor IX: successful surgi…, American journal of hematol… (1992) | [10.1002/ajh.2830400310](https://doi.org/10.1002/ajh.2830400310) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.0). The first reading is what the record holds.">cross-check: disputed</span> | [Jonsson_2021](drugs/drug_coagulation_factor_ix/pd_Jonsson_2021_ABR.md) | Jonsson F et al., Exposure-Bleeding Count Modeling of Emi…, Clinical pharmacokinetics (2021) | [10.1007/s40262-021-01006-0](https://doi.org/10.1007/s40262-021-01006-0) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=coagulation_factor_ix) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: F10 (activator), F11 (target), F7 (target), F8 (cofactor), GGCX (substrate), LRP1 (binder).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs_review 2  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Brekkan_2016.pdf` | Brekkan A et al., Population pharmacokinetics of plasma-d…, Journal of thrombosis and h… (2016) | popPK | 10 | [10.1111/jth.13271](https://doi.org/10.1111/jth.13271) | [26806557](https://pubmed.ncbi.nlm.nih.gov/26806557) | The paper describes a population PK model for factor IX, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| `Preijers_2018.pdf` | Preijers T et al., Population pharmacokinetics of factor I…, Journal of thrombosis and h… (2018) | popPK | 10 | [10.1111/jth.14292](https://doi.org/10.1111/jth.14292) | [30394056](https://pubmed.ncbi.nlm.nih.gov/30394056) | The paper reports a population PK model for coagulation factor IX with explicit numeric values for clearance, volumes, and intercompartmental clearances in the text. |
| `Zhang_2016.pdf` | Zhang Y et al., Population pharmacokinetics of a new lo…, Journal of thrombosis and h… (2016) | popPK | 10 | [10.1111/jth.13444](https://doi.org/10.1111/jth.13444) | [27513989](https://pubmed.ncbi.nlm.nih.gov/27513989) | The paper describes a population PK model for coagulation factor IX, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence, which only contains qualitative summaries and simulation outcomes. |
| `Goldsmith_1992.pdf` | Goldsmith JC et al., Coagulation factor IX: successful surgi…, American journal of hematol… (1992) | popPK | 9 | [10.1002/ajh.2830400310](https://doi.org/10.1002/ajh.2830400310) | [1609775](https://pubmed.ncbi.nlm.nih.gov/1609775) | The paper reports quantitative pharmacokinetic parameters (two-compartment model half-lives and recovery) for coagulation factor IX directly in the text. |
| `Tegenge_2020.pdf` | Tegenge MA et al., Model-Based Evaluation of Linear Limite…, Journal of clinical pharmac… (2020) | popPK | 9 | [10.1002/jcph.1651](https://doi.org/10.1002/jcph.1651) | [32501555](https://pubmed.ncbi.nlm.nih.gov/32501555) | The paper describes a population PK model for coagulation factor IX, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence, which only reports performance metrics (bias, RMSE) and dosing averages. |

<sub>queue written 2026-09-18T20:14:51.131962+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Brekkan_2016 | relevant | 10 | 0 | The paper describes a population PK model for factor IX, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| popPK | Jonsson_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and exposure-response of emicizumab, not coagulation_factor_ix, which is only mentioned as a binding target. |
| popPK | Tegenge_2020 | relevant | 9 | 2 | The paper describes a population PK model for coagulation factor IX, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence, which only reports performance metrics (bias, RMSE) and dosing averages. |
| popPK | Zhang_2016 | relevant | 10 | 2 | The paper describes a population PK model for coagulation factor IX, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence, which only contains qualitative summaries and simulation outcomes. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-18 20:15 UTC</sub>
