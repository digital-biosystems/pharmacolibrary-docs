<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;letermovir&quot;}]"></div>

# letermovir

- **generic name:** letermovir
- **ATC codes:** `J05AX18`
- **DrugBank:** [DB12070](https://go.drugbank.com/drugs/DB12070) · **PubChem:** not captured
- **molar mass:** 572.561 g/mol (C29H28F4N4O4) — DrugBank
- **groups:** approved, investigational

## About

Letermovir is an antiviral medicine used against cytomegalovirus infections. It is authorised in the European Union and is an approved drug, though it is not among the most widely used antivirals.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q15409407](https://www.wikidata.org/wiki/Q15409407) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| letermovir | parent | 572.561 | C29H28F4N4O4 | DrugBank | — | Prohn_2021, Royston_2025 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 13:52 | 5:04 | 0/2/0 | 1/0/0 | 0/0/0 | 260,715/13,696 | einfracz / qwen3.8-27b | 9 | 2/7 | 9/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.759). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C2 negative clearance/volume in a covariate scenario or base (implausible — bas…</sub><br><sub>route_to: `human_review`</sub> | [Prohn_2021_reference](drugs/drug_letermovir/Letermovir_Prohn2021_reference.md) | — | 3-compartment (no model) | 11 (+2 cov.) | Prohn M et al., Population pharmacokinetics of letermov…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12593](https://doi.org/10.1002/psp4.12593) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.6). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Royston_2025_reference](drugs/drug_letermovir/Letermovir_Royston2025_reference.md) | — | 1-compartment (no model) | 0 | Royston L et al., Population pharmacokinetic analysis of…, Antimicrobial agents and ch… (2025) | [10.1128/aac.00697-25](https://doi.org/10.1128/aac.00697-25) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 1.00).">in vitro</span> | [Giménez_2023_CMV_IE1](drugs/drug_letermovir/pd_Gim_nez_2023_CMV_IE1.md) | CMV replication (inhibition of CMV IE1 expression) ← letermovir · inhibition effect | — | Giménez E et al., In vitro assessment of the combined eff…, Revista espanola de quimiot… (2023) | [10.37201/req/016.2023](https://doi.org/10.37201/req/016.2023) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=letermovir).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2B6` inducer, `CYP2C19` inducer, `CYP2C8` inhibitor, `CYP2C9` inducer, `CYP2D6` substrate, `CYP3A4` inhibitor/substrate, `SLCO1B1` inhibitor/substrate, `SLCO1B3` inhibitor/substrate, `UGT1A1` substrate, `UGT1A3` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate, `UGT1A1` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `ABCC2` inhibitor, `SLC22A8` inhibitor | DrugBank actor |
| excretion | liver | `ABCB11` inhibitor, `ABCC2` inhibitor | DrugBank actor |
| excretion | small intestine | `ABCC2` inhibitor | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 29 matched, 20 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Tahtsidou_2026.pdf` | Tahtsidou C et al., Model-based assessment of letermovir ph…, The Journal of antimicrobia… (2026) | popPK | 9 | [10.1093/jac/dkaf427](https://doi.org/10.1093/jac/dkaf427) | [41491673](https://pubmed.ncbi.nlm.nih.gov/41491673) | The paper reports a population PK study for letermovir in humans, but specific quantitative model parameters (CL, V, etc.) are not explicitly provided in the text, only concentration medians and qualitative model changes. |
| `Asari_2022.pdf` | Asari K et al., Pharmacokinetics, Safety, and Tolerabil…, Clinical pharmacology in dr… (2022) | popPK | 8 | [10.1002/cpdd.1081](https://doi.org/10.1002/cpdd.1081) | [35238179](https://pubmed.ncbi.nlm.nih.gov/35238179) | The study reports population pharmacokinetic findings for letermovir in humans, but specific numeric parameter values (CL, V, etc.) are not explicitly listed in the provided abstract evidence. |
| `Groll_2024.pdf` | Groll AH et al., Pharmacokinetics, Safety, and Efficacy…, The Pediatric infectious di… (2024) | popPK | 5 | [10.1097/INF.0000000000004208](https://doi.org/10.1097/INF.0000000000004208) | [38241643](https://pubmed.ncbi.nlm.nih.gov/38241643) | The paper reports exposure metrics (AUC) for letermovir in adolescents but does not list specific compartmental PK parameter values (CL, V, Q) in the provided text; it references population PK simulations rather than providing the model parameter estimates for this cohort. |
| `Prohn_2022.pdf` | Prohn M et al., Exposure-Response Analyses of Letermovi…, Clinical pharmacology and t… (2022) | popPK | 5 | [10.1002/cpt.2456](https://doi.org/10.1002/cpt.2456) | [34674258](https://pubmed.ncbi.nlm.nih.gov/34674258) | The study reports exposure-response analyses based on a population PK model but does not provide the specific numeric PK parameters (CL, V, etc.) in the evidence, only stating they were derived from a model. |

<sub>queue written 2026-10-07T13:49:11.144069+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Asari_2022 | relevant | 8 | 1 | The study reports population pharmacokinetic findings for letermovir in humans, but specific numeric parameter values (CL, V, etc.) are not explicitly listed in the provided abstract evidence. |
| popPK | Carter_2025 | irrelevant | 0 | 0 | The paper describes in vitro virology and drug resistance profiling of HCMV mutants, not the pharmacokinetics of letermovir. |
| popPK | Chemaly_2019 | irrelevant | 0 | 0 | This is a systematic review of in vitro antiviral activity (EC50 values) and does not report quantitative pharmacokinetic parameters for letermovir. |
| popPK | Chou_2022 | irrelevant | 0 | 0 | The paper focuses on genotypic resistance mutations and in-vitro EC50 values for letermovir, not pharmacokinetic disposition parameters. |
| popPK | Fromage_2025 | relevant | 8 | 2 | The study implements a POPPK model for letermovir and provides some exposure metrics (Cmax, C24h) and a volume of distribution, but the specific quantitative structural parameter values (CL, V1, V2, Q, Ka) are stated to be in Table 1 which is not included in the provided evidence. |
| popPK | Groll_2024 | relevant | 5 | 2 | The paper reports exposure metrics (AUC) for letermovir in adolescents but does not list specific compartmental PK parameter values (CL, V, Q) in the provided text; it references population PK simulations rather than providing the model parameter estimates for this cohort. |
| popPK | Guo_2022 | irrelevant | 0 | 0 | The paper reports in vitro antiviral activity (EC50, CC50) of synthesized piperidine analogs, with letermovir mentioned only as a comparator agent without any pharmacokinetic data. |
| popPK | Lynch_2025 | irrelevant | 0 | 0 | The paper is a systematic review of antibiotic pharmacokinetics in patients with obesity and does not mention or report data for letermovir. |
| popPK | Malnoë_2025 | irrelevant | 0 | 0 | The study models the pharmacokinetics of C-reactive protein and its effect on Ciclosporin metabolism, using Letermovir only as a context for drug-drug interaction validation, not as the subject of PK parameter estimation. |
| popPK | Pang_2026 | irrelevant | 0 | 0 | no_text gate: only 108 chars of text extracted (&lt; 400) |
| popPK | Prohn_2022 | relevant | 5 | 0 | The study reports exposure-response analyses based on a population PK model but does not provide the specific numeric PK parameters (CL, V, etc.) in the evidence, only stating they were derived from a model. |
| popPK | Suetsugu_2021 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for voriconazole, not letermovir, which is only used as a co-administered covariate to assess drug-drug interactions. |
| popPK | Suetsugu_2024 | irrelevant | 2 | 1 | The paper is a review summarizing clinical PK/PD, and while it mentions a bioavailability estimate, it does not provide specific numeric values for clearance, volume, or other disposition parameters in the provided text. |
| popPK | Tahtsidou_2026 | relevant | 9 | 3 | The paper reports a population PK study for letermovir in humans, but specific quantitative model parameters (CL, V, etc.) are not explicitly provided in the text, only concentration medians and qualitative model changes. |
| popPK | Zhang_2023 | irrelevant | 0 | 0 | The paper studies a new antiviral compound (AD-51) targeting HCMV AN and mentions letermovir only as a resistance comparator, with no PK parameters for letermovir. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 13:49 UTC</sub>
