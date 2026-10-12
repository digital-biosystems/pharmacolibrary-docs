<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;lenvatinib&quot;}]"></div>

# lenvatinib

- **generic name:** lenvatinib
- **ATC codes:** `L01EX08`, `L01XE`, `L01XE29`
- **DrugBank:** [DB09078](https://go.drugbank.com/drugs/DB09078) · **PubChem:** [CID 9823820](https://pubchem.ncbi.nlm.nih.gov/compound/9823820)
- **molar mass:** 426.86 g/mol (C21H19ClN4O4) — DrugBank
- **groups:** approved, investigational

## About

Lenvatinib is a protein kinase inhibitor used to treat certain cancers, including thyroid cancer and kidney (renal cell) cancer. It is authorised in the European Union and is used in cancer care.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q6523413](https://www.wikidata.org/wiki/Q6523413) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| lenvatinib | parent | 426.86 | C21H19ClN4O4 | DrugBank | [9823820](https://pubchem.ncbi.nlm.nih.gov/compound/9823820) | Gupta_2016, Hu_2022, Majid_2024, Tamai_2017 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 02:46 | 9:06 | 0/3/2 | 0/0/3 | 0/0/0 | 236,336/48,456 | openai / gpt-6-luna | 7 | 0/7 | 7/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.444). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Gupta_2016_reference](drugs/drug_lenvatinib/Lenvatinib_Gupta2016_reference.md) | — | 1-compartment (no model) | 2 | Gupta A et al., Population pharmacokinetic analysis of…, British journal of clinical… (2016) | [10.1111/bcp.12907](https://doi.org/10.1111/bcp.12907) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by qwen3.8-27b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Hu_2022_reference](drugs/drug_lenvatinib/Lenvatinib_Hu2022_reference.md) | — | 1-compartment (no model) | 1 | Hu Y et al., Population Pharmacokinetic Modeling of…, Journal of clinical pharmac… (2022) | [10.1002/jcph.2103](https://doi.org/10.1002/jcph.2103) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.769). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Majid_2024_reference](drugs/drug_lenvatinib/Lenvatinib_Majid2024_reference.md) | — | 2-compartment (no model) | 9 (+2 cov.) | Majid O et al., Population pharmacokinetic-pharmacodyna…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13130](https://doi.org/10.1002/psp4.13130) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by qwen3.8-27b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Tamai_2017_base](drugs/drug_lenvatinib/Lenvatinib_Tamai2017_base.md) | — | 1-compartment (no model) | 3 (+1 cov.) | Tamai T et al., Dose Finding of Lenvatinib in Subjects…, Journal of clinical pharmac… (2017) | [10.1002/jcph.917](https://doi.org/10.1002/jcph.917) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.867). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Tamai_2017_final](drugs/drug_lenvatinib/Lenvatinib_Tamai2017_final.md) | — | 1-compartment (no model) | 3 (+3 cov.) | Tamai T et al., Dose Finding of Lenvatinib in Subjects…, Journal of clinical pharmac… (2017) | [10.1002/jcph.917](https://doi.org/10.1002/jcph.917) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.556). The first reading is what the record holds.">cross-check: disputed</span> | [Hayato_2018_AE](drugs/drug_lenvatinib/pd_Hayato_2018_AE.md) | dose-altering AEs ← lenvatinib · categorical (graded) response model | — | Hayato S et al., Exposure-response analysis and simulati…, Cancer chemotherapy and pha… (2018) | [10.1007/s00280-018-3687-4](https://doi.org/10.1007/s00280-018-3687-4) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.625). The first reading is what the record holds.">cross-check: disputed</span> | [Hayato_2018_y](drugs/drug_lenvatinib/pd_Hayato_2018_y.md) | sum of diameters of all target lesions ← lenvatinib · direct Emax (saturable) effect | — | Hayato S et al., Exposure-response analysis and simulati…, Cancer chemotherapy and pha… (2018) | [10.1007/s00280-018-3687-4](https://doi.org/10.1007/s00280-018-3687-4) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by einfracz:qwen3.8-27b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | [Majid_2024_Ang_2](drugs/drug_lenvatinib/pd_Majid_2024_Ang_2.md) | Ang‐2 ← lenvatinib · indirect response — drug inhibits the production of Ang‐2 | — | Majid O et al., Population pharmacokinetic-pharmacodyna…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13130](https://doi.org/10.1002/psp4.13130) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.889). The first reading is what the record holds.">cross-check: disputed</span> | [Majid_2024_FGF_23](drugs/drug_lenvatinib/pd_Majid_2024_FGF_23.md) | FGF‐23 ← lenvatinib · indirect response — drug inhibits the loss of FGF‐23 | — | Majid O et al., Population pharmacokinetic-pharmacodyna…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13130](https://doi.org/10.1002/psp4.13130) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.75). The first reading is what the record holds.">cross-check: disputed</span> | [Majid_2024_SLD](drugs/drug_lenvatinib/pd_Majid_2024_SLD.md) | sum of the longest diameter for target lesions ← lenvatinib · direct Emax (saturable) effect | — | Majid O et al., Population pharmacokinetic-pharmacodyna…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13130](https://doi.org/10.1002/psp4.13130) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by einfracz:qwen3.8-27b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | [Majid_2024_Tie_2](drugs/drug_lenvatinib/pd_Majid_2024_Tie_2.md) | Tie‐2 ← lenvatinib · indirect response — drug inhibits the production of Tie‐2 | — | Majid O et al., Population pharmacokinetic-pharmacodyna…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13130](https://doi.org/10.1002/psp4.13130) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.889). The first reading is what the record holds.">cross-check: disputed</span> | [Majid_2024_VEGF](drugs/drug_lenvatinib/pd_Majid_2024_VEGF.md) | VEGF ← lenvatinib · indirect response — drug inhibits the loss of VEGF | — | Majid O et al., Population pharmacokinetic-pharmacodyna…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13130](https://doi.org/10.1002/psp4.13130) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.714). The first reading is what the record holds.">cross-check: disputed</span> | [Tamai_2017_TEAEs](drugs/drug_lenvatinib/pd_Tamai_2017_TEAEs.md) | occurrence of TEAEs leading to study drug withdrawal or dose reduction during cycle 1 ← lenvatinib · categorical (graded) response model | — | Tamai T et al., Dose Finding of Lenvatinib in Subjects…, Journal of clinical pharmac… (2017) | [10.1002/jcph.917](https://doi.org/10.1002/jcph.917) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=lenvatinib).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate, `ABCG2` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate, `ABCG2` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate, `ABCG2` substrate | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate, `ABCG2` substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | liver | `AOX1` substrate, `CYP1A2` inhibitor, `CYP2B6` inhibitor, `CYP2C19` inhibitor, `CYP2C8` inhibitor, `CYP2C9` inhibitor, `CYP2D6` inhibitor, `CYP3A4` inducer/inhibitor/substrate, `SLCO1B1` inhibitor, `SLCO1B3` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC22A2` inhibitor, `SLC22A6` inhibitor, `SLC22A8` inhibitor | DrugBank actor |
| excretion | liver | `ABCB11` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: FGFR1 (inhibitor), FGFR2 (inhibitor), FGFR3 (inhibitor), FGFR4 (inhibitor), FLT1 (inhibitor), FLT4 (inhibitor), KDR (inhibitor), KIT (inhibitor), PDGFRA (inhibitor), RET (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 15 matched, 14 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 5  ·  extracted 0  ·  needs_review 2  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gupta_2016.pdf` | Gupta A et al., Population pharmacokinetic analysis of…, British journal of clinical… (2016) | popPK | 10 | [10.1111/bcp.12907](https://doi.org/10.1111/bcp.12907) | [26879594](https://pubmed.ncbi.nlm.nih.gov/26879594) | Human population-PK model reports numeric lenvatinib CL/F and other quantitative PK findings. |
| `Hu_2022.pdf` | Hu Y et al., Population Pharmacokinetic Modeling of…, Journal of clinical pharmac… (2022) | popPK | 10 | [10.1002/jcph.2103](https://doi.org/10.1002/jcph.2103) | [35689595](https://pubmed.ncbi.nlm.nih.gov/35689595) | The human population-PK model reports numeric lenvatinib clearance and covariate effects in the provided evidence. |

<sub>queue written 2026-10-07T02:37:51.279294+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bergerot_2023 | irrelevant | 0 | 0 | This is a human quality-of-life analysis and reports no lenvatinib pharmacokinetic disposition parameters. |
| popPK | Hatanaka_2023 | irrelevant | 0 | 0 | The mixed-effects models assess liver-function changes, not lenvatinib disposition parameters. |
| popPK | Hayato_2018 | irrelevant | 2 | 0 | This is an exposure–response analysis using a population-PK model reported elsewhere, and no lenvatinib disposition parameter values are provided here; model estimates are referred to in tables not included. |
| popPK | Kumondai_2024 | relevant | 7 | 1 | Human lenvatinib concentrations were analyzed using a three-compartment model, but its numeric disposition parameters are not provided here. |
| popPK | Royer_2025 | irrelevant | 0 | 0 | Lenvatinib is only an in-vitro comparator; the reported pharmacokinetics are for XON9, not lenvatinib. |
| popPK | Sueshige_2021 | irrelevant | 1 | 0 | This is a bioanalytical assay study and reports no lenvatinib disposition parameters. |
| popPK | Vogel_2021 | irrelevant | 0 | 0 | This clinical outcomes study reports no lenvatinib pharmacokinetic parameters or model. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 02:38 UTC</sub>
