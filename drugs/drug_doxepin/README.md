<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D04A&quot;,&quot;href&quot;:&quot;atc/D04A.md&quot;},{&quot;label&quot;:&quot;doxepin&quot;}]"></div>

# doxepin

- **generic name:** doxepin
- **ATC codes:** `D04AX01`, `N06AA12`
- **DrugBank:** [DB01142](https://go.drugbank.com/drugs/DB01142) · **PubChem:** [CID 667468](https://pubchem.ncbi.nlm.nih.gov/compound/667468)
- **molar mass:** 279.3761 g/mol (C19H21NO) — DrugBank
- **groups:** approved

## About

Doxepin is a tricyclic antidepressant used to treat depression, and as a topical antipruritic to relieve itching of the skin. It remains an approved medicine and is used fairly widely, available both as an oral antidepressant and as a skin cream.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q71704041](https://www.wikidata.org/wiki/Q71704041) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| doxepin | parent | 279.376 | C19H21NO | DrugBank | [667468](https://pubchem.ncbi.nlm.nih.gov/compound/667468) | Kirchheiner_2002 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Kirchheiner_2002_reference](drugs/drug_doxepin/Doxepin_Kirchheiner2002_reference.md) | — | general linear (no model) | 2 | Kirchheiner J et al., Contributions of CYP2D6, CYP2C9 and CYP…, Pharmacogenetics (2002) | [10.1097/00008571-200210000-00010](https://doi.org/10.1097/00008571-200210000-00010) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span> | [Li_2019_Kv_currents](drugs/drug_doxepin/pd_Li_2019_Kv_currents.md) | Vascular Kv currents ← doxepin · direct sigmoid Emax (Hill) effect | — | Li H et al., Inhibitory Effect of Tricyclic Antidepr…, Cardiovascular toxicology (2019) | [10.1007/s12012-019-09519-8](https://doi.org/10.1007/s12012-019-09519-8) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [Meyer_2012_cAMP](drugs/drug_doxepin/pd_Meyer_2012_cAMP.md) | cAMP accumulation ← doxepin · inhibition effect | — | Meyer JM et al., A "genome-to-lead" approach for insecti…, PLoS neglected tropical dis… (2012) | [10.1371/journal.pntd.0001478](https://doi.org/10.1371/journal.pntd.0001478) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [Meyer_2012_cAMP_2](drugs/drug_doxepin/pd_Meyer_2012_cAMP_2.md) | cAMP accumulation ← doxepin · inhibition effect | — | Meyer JM et al., A "genome-to-lead" approach for insecti…, PLoS neglected tropical dis… (2012) | [10.1371/journal.pntd.0001478](https://doi.org/10.1371/journal.pntd.0001478) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Claro_1986_3H_inositol_1_phosphate_accumulation](drugs/drug_doxepin/pd_Claro_1986_3H_inositol_1_phosphate_accumulation.md) | [3H]inositol 1-phosphate accumulation ← doxepin · inhibition effect | — | Claro E et al., Phosphoinositide hydrolysis mediated by…, European journal of pharmac… (1986) | [10.1016/0014-2999(86)90659-x](https://doi.org/10.1016/0014-2999(86)90659-x) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 14:42 | 3:41 | 0/1/0 | 2/1/0 | 0/0/0 | 74,805/17,275 | openai / gpt-6-luna | 15 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kirchheiner_2002.pdf` | Kirchheiner J et al., Contributions of CYP2D6, CYP2C9 and CYP…, Pharmacogenetics (2002) | popPK | 10 | [10.1097/00008571-200210000-00010](https://doi.org/10.1097/00008571-200210000-00010) | [12360109](https://pubmed.ncbi.nlm.nih.gov/12360109) | Reports quantitative doxepin clearances and population-PK analysis in healthy volunteers. |
| `Meyer-Barner_2002.pdf` | Meyer-Barner M et al., Pharmacokinetics of doxepin and desmeth…, European journal of clinica… (2002) | popPK | 10 | [10.1007/s00228-002-0448-3](https://doi.org/10.1007/s00228-002-0448-3) | [12136371](https://pubmed.ncbi.nlm.nih.gov/12136371) | Human population-PK model, but numeric CL/F and V/F estimates are absent; only a 15% CL reduction is reported. |
| `Yan_2002_2.pdf` | Yan JH et al., Absolute bioavailability and stereosele…, Xenobiotica; the fate of fo… (2002) | popPK | 10 | [10.1080/00498250210131879](https://doi.org/10.1080/00498250210131879) | [12162857](https://pubmed.ncbi.nlm.nih.gov/12162857) | The human study models doxepin disposition, but the evidence gives no numeric model parameters beyond the absorbed fraction. |

<sub>queue written 2026-10-07T14:39:47.451880+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Claro_1986 | irrelevant | 0 | 0 | Doxepin is only an H1-receptor antagonist here; no pharmacokinetic parameters are reported. |
| popPK | Li_2019 | irrelevant | 0 | 0 | This is an in-vitro ion-channel study and reports no doxepin pharmacokinetic parameters. |
| popPK | Meyer-Barner_2002 | relevant | 10 | 2 | Human population-PK model, but numeric CL/F and V/F estimates are absent; only a 15% CL reduction is reported. |
| popPK | Meyer_2012 | irrelevant | 0 | 0 | The paper reports doxepin receptor activity and mosquito toxicity, but no pharmacokinetic disposition parameters. |
| popPK | Mochizuki_2004 | irrelevant | 1 | 0 | Doxepin is a PET tracer for receptor measurement, and no numeric doxepin disposition parameters are provided. |
| popPK | Mochizuki_2004_2 | irrelevant | 2 | 0 | Doxepin is used as a PET receptor-imaging tracer, and no numeric disposition parameter values are provided. |
| popPK | Pancrazio_1998 | irrelevant | 0 | 0 | This in-vitro ion-channel study reports no quantitative doxepin disposition parameters. |
| popPK | Yan_2002_2 | relevant | 10 | 4 | The human study models doxepin disposition, but the evidence gives no numeric model parameters beyond the absorbed fraction. |
| popPK | Yanai_1991 | irrelevant | 0 | 0 | Doxepin is only a PET tracer, and no quantitative doxepin disposition parameters are reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 14:39 UTC</sub>
