<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;romidepsin&quot;}]"></div>

# romidepsin

- **generic name:** romidepsin
- **ATC codes:** `L01XH02`, `L01XX39`
- **DrugBank:** [DB06176](https://go.drugbank.com/drugs/DB06176) · **PubChem:** [CID 57515973](https://pubchem.ncbi.nlm.nih.gov/compound/57515973)
- **molar mass:** 540.69 g/mol (C24H36N4O6S2) — DrugBank
- **groups:** approved, investigational

## About

Romidepsin is an anticancer drug used to treat lymphoma, including cutaneous T-cell lymphoma (mycosis fungoides) and other mature T-cell lymphomas. It is approved for use, mainly in the treatment of T-cell lymphomas, though a marketing application was refused in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7363205](https://www.wikidata.org/wiki/Q7363205) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| romidepsin | parent | 540.69 | C24H36N4O6S2 | DrugBank | [57515973](https://pubchem.ncbi.nlm.nih.gov/compound/57515973) | Woo_2009 |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 15.9 | L/h | 15.9 L/h | patients with cutaneous T-cell lymphoma and relapsed peripheral T-cell lymphoma | The text does not specify the exact table number or caption for the final fitted PK parameter estimates. The abstract mentions results but does not cite a specific table like "Table 1" or "Table 2". | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Woo_2009_reference](drugs/drug_romidepsin/Romidepsin_Woo2009_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Woo_2009_reference](drugs/drug_romidepsin/Romidepsin_Woo2009_reference.md) | — | 1-compartment (no model) | 1 | Woo S et al., Population pharmacokinetics of romideps…, Clinical cancer research :… (2009) | [10.1158/1078-0432.CCR-08-1215](https://doi.org/10.1158/1078-0432.CCR-08-1215) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Moltó_2021_apoptosis_markers_in_CD4_T_cells](drugs/drug_romidepsin/pd_Molt_2021_apoptosis_markers_in_CD4_T_cells.md) | apoptosis markers in CD4+ T cells ← romidepsin · direct linear effect | — | Moltó J et al., Pharmacokinetic/pharmacodynamic analysi…, The Journal of antimicrobia… (2021) | [10.1093/jac/dkaa523](https://doi.org/10.1093/jac/dkaa523) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Moltó_2021_expression_of_exhaustion_markers_by_CD4_T_cells](drugs/drug_romidepsin/pd_Molt_2021_expression_of_exhaustion_markers_by_CD4_T_cells.md) | expression of exhaustion markers by CD4+ T cells ← romidepsin · direct linear effect | — | Moltó J et al., Pharmacokinetic/pharmacodynamic analysi…, The Journal of antimicrobia… (2021) | [10.1093/jac/dkaa523](https://doi.org/10.1093/jac/dkaa523) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Moltó_2021_expression_of_exhaustion_markers_by_CD8_T_cells](drugs/drug_romidepsin/pd_Molt_2021_expression_of_exhaustion_markers_by_CD8_T_cells.md) | expression of exhaustion markers by CD8+ T cells ← romidepsin · direct linear effect | — | Moltó J et al., Pharmacokinetic/pharmacodynamic analysi…, The Journal of antimicrobia… (2021) | [10.1093/jac/dkaa523](https://doi.org/10.1093/jac/dkaa523) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Moltó_2021_CD4](drugs/drug_romidepsin/pd_Molt_2021_CD4.md) | CD4+ counts ← romidepsin · direct linear effect | — | Moltó J et al., Pharmacokinetic/pharmacodynamic analysi…, The Journal of antimicrobia… (2021) | [10.1093/jac/dkaa523](https://doi.org/10.1093/jac/dkaa523) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=romidepsin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| distribution | placenta | `ABCB1` substrate | DrugBank actor |
| distribution | testis | `ABCB1` substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP2B6` substrate, `CYP2C19` substrate, `CYP3A4` substrate, `CYP3A5` substrate, `SLCO1B1` inhibitor, `SLCO1B3` inhibitor | DrugBank actor |
| metabolism | lung | `CYP1A1` substrate | DrugBank actor |
| metabolism | small intestine | `CYP1A1` substrate, `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | kidney | `ABCB1` substrate, `SLC22A2` inhibitor, `SLC22A6` inhibitor | DrugBank actor |
| excretion | liver | `ABCB1` substrate, `ABCB11` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: HDAC1 (inhibitor), HDAC1 (target), HDAC2 (inhibitor), HDAC2 (target), HDAC4 (inhibitor), HDAC6 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 21:38 | 0:58 | 1/0/0 | 1/0/0 | 0/0/0 | 91,398/4,934 | einfracz / qwen3.8-27b | 3 | 3/0 | 2/1 | 0 |

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Moltó_2021.pdf` | Moltó J et al., Pharmacokinetic/pharmacodynamic analysi…, The Journal of antimicrobia… (2021) | popPK | 10 | [10.1093/jac/dkaa523](https://doi.org/10.1093/jac/dkaa523) | [33367767](https://pubmed.ncbi.nlm.nih.gov/33367767) | The paper describes a population PK model for romidepsin, but the specific numeric parameter estimates (CL, V, etc.) are not present in the provided evidence text. |
| `Woo_2009.pdf` | Woo S et al., Population pharmacokinetics of romideps…, Clinical cancer research :… (2009) | popPK | 10 | [10.1158/1078-0432.CCR-08-1215](https://doi.org/10.1158/1078-0432.CCR-08-1215) | [19228751](https://pubmed.ncbi.nlm.nih.gov/19228751) | The paper is a population PK study of romidepsin in humans, and the abstract reports the population clearance (15.9 L/h), but other parameters like volume of distribution and intercompartmental clearance are not numerically provided in the extracted text. |

<sub>queue written 2026-10-06T21:38:10.595361+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Mejia_2014 | irrelevant | 0 | 0 | This is an in-vitro natural product chemistry and pharmacology study where romidepsin is used only as a positive control for potency, with no pharmacokinetic data reported. |
| popPK | Moltó_2021 | relevant | 10 | 0 | The paper describes a population PK model for romidepsin, but the specific numeric parameter estimates (CL, V, etc.) are not present in the provided evidence text. |
| popPK | Peer_2018 | irrelevant | 0 | 0 | The paper discusses belinostat, not romidepsin. |
| popPK | Tseng_2015 | irrelevant | 0 | 0 | The study focuses on the anticachectic activity of AR-42, with romidepsin serving only as a comparator agent and no PK parameters reported. |
| popPK | Wei_2014 | irrelevant | 0 | 0 | This study investigates romidepsin's ability to reverse HIV latency in vitro and ex vivo, reporting mechanistic data (EC50, fold-changes in HIV RNA) rather than pharmacokinetic disposition parameters (CL, V, t1/2) for romidepsin. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-06 21:38 UTC</sub>
