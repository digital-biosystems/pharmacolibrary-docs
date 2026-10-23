<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R06A&quot;,&quot;href&quot;:&quot;atc/R06A.md&quot;},{&quot;label&quot;:&quot;astemizole&quot;}]"></div>

# astemizole

- **generic name:** astemizole
- **ATC codes:** `R06AX11`
- **DrugBank:** [DB00637](https://go.drugbank.com/drugs/DB00637) · **PubChem:** [CID 2247](https://pubchem.ncbi.nlm.nih.gov/compound/2247)
- **molar mass:** 458.5703 g/mol (C28H31FN4O) — DrugBank
- **groups:** approved, withdrawn

## About

Astemizole is a non-sedating antihistamine that was used to treat allergic conditions such as urticaria and giant papillary conjunctivitis. It has been withdrawn from the market because it could cause serious heart rhythm problems, including QT prolongation.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q423437](https://www.wikidata.org/wiki/Q423437) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Back_2015_QTc](drugs/drug_astemizole/pd_Back_2015_QTc.md) | QTc interval ← astemizole · direct Emax (saturable) effect | — | Back HM et al., Development of QTc prolongation model i…, Xenobiotica; the fate of fo… (2015) | [10.3109/00498254.2014.991366](https://doi.org/10.3109/00498254.2014.991366) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=astemizole).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| distribution | placenta | `ABCB1` inhibitor | DrugBank actor |
| distribution | testis | `ABCB1` inhibitor | DrugBank actor |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | heart | `CYP2J2` substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` substrate, `CYP3A4` inhibitor/substrate, `CYP3A5` substrate, `CYP3A7` substrate | DrugBank actor |
| metabolism | small intestine | `CYP2J2` substrate, `CYP3A4` inhibitor/substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | kidney | `ABCB1` inhibitor | DrugBank actor |
| excretion | liver | `ABCB1` inhibitor, `ABCB11` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: HRH1 (target), KCNH1 (unknown), KCNH2 (inhibitor), MAPT (unknown).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:36 | 1:45 | 0/0/0 | 1/0/0 | 0/0/0 | 70,531/1,592 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 1/1 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Back_2015.pdf` | Back HM et al., Development of QTc prolongation model i…, Xenobiotica; the fate of fo… (2015) | popPK | 10 | [10.3109/00498254.2014.991366](https://doi.org/10.3109/00498254.2014.991366) | [25475996](https://pubmed.ncbi.nlm.nih.gov/25475996) | The paper reports specific quantitative PK parameters (ka, Vc, Vm, kel) for astemizole in the context of a PK/PD model. |

<sub>queue written 2026-10-07 22:35 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abbaali_2021 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic analysis of astemizole's effect on parasite microtubules and does not report pharmacokinetic parameters. |
| popPK | Cvetkovic_2003 | irrelevant | 0 | 0 | The paper is a review of lopinavir/ritonavir and only mentions astemizole as a contraindicated interacting drug, providing no pharmacokinetic parameters for astemizole. |
| popPK | Desager_1995 | irrelevant | 2 | 0 | This is a review article summarizing PK-PD relationships for multiple antihistamines, including astemizole, but it does not report original quantitative disposition parameters (CL, V, etc.) for astemizole in the provided text. |
| popPK | Dresser_2000 | irrelevant | 0 | 0 | The paper is a review of CYP3A4 drug interactions and does not report original quantitative pharmacokinetic parameters for astemizole. |
| popPK | Guo_2002 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology paper where astemizole is used only as a pharmacological antagonist to block histamine receptors, not as the subject of pharmacokinetic analysis. |
| popPK | Hamid_2004 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity assay comparison and does not report pharmacokinetic parameters for astemizole. |
| popPK | Shin_2006 | irrelevant | 0 | 0 | The study investigates the electrophysiological effects of brompheniramine, not the pharmacokinetics of astemizole. |
| popPK | Sugiyama_1997 | irrelevant | 2 | 0 | The study is a mechanistic cardiotoxicity assessment in dogs that mentions a two-compartment pattern but does not report quantitative PK parameters (CL, V, ka, etc.) for astemizole. |
| popPK | Yu_2014 | irrelevant | 0 | 0 | The study is an in-vitro radioligand binding assay investigating allosteric modulation of the hERG channel, not a pharmacokinetic study of astemizole disposition. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bastemizole%5D&body=Drug%3A%20astemizole%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_astemizole/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
