<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N04C&quot;,&quot;href&quot;:&quot;atc/N04C.md&quot;},{&quot;label&quot;:&quot;istradefylline&quot;}]"></div>

# istradefylline

- **generic name:** istradefylline
- **ATC codes:** `N04CX01`
- **DrugBank:** [DB11757](https://go.drugbank.com/drugs/DB11757) · **PubChem:** [CID 5311037](https://pubchem.ncbi.nlm.nih.gov/compound/5311037)
- **molar mass:** 384.436 g/mol (C20H24N4O4) — DrugBank
- **groups:** approved, investigational

## About

Istradefylline is a drug used to treat Parkinson's disease, acting as an adenosine A2 receptor antagonist. It is an approved antiparkinson medicine, though a marketing application was refused in the European Union, so its use is mainly elsewhere.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q905783](https://www.wikidata.org/wiki/Q905783) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| istradefylline | parent | 384.436 | C20H24N4O4 | DrugBank | [5311037](https://pubchem.ncbi.nlm.nih.gov/compound/5311037) | Knebel_2011 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Knebel_2011_reference](drugs/drug_istradefylline/Istradefylline_Knebel2011_reference.md) | — | 1-compartment (no model) | 6 | Knebel W et al., Population pharmacokinetic analysis of…, Journal of clinical pharmac… (2011) | [10.1177/0091270010363809](https://doi.org/10.1177/0091270010363809) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Knebel_2012_dizziness](drugs/drug_istradefylline/pd_Knebel_2012_dizziness.md) | dizziness probability ← istradefylline · direct Emax (saturable) effect | — | Knebel W et al., Population pharmacokinetic-pharmacodyna…, Journal of clinical pharmac… (2012) | [10.1177/0091270011420566](https://doi.org/10.1177/0091270011420566) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Knebel_2012_dyskinesia](drugs/drug_istradefylline/pd_Knebel_2012_dyskinesia.md) | dyskinesia probability ← istradefylline · direct Emax (saturable) effect | — | Knebel W et al., Population pharmacokinetic-pharmacodyna…, Journal of clinical pharmac… (2012) | [10.1177/0091270011420566](https://doi.org/10.1177/0091270011420566) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Knebel_2012_nausea](drugs/drug_istradefylline/pd_Knebel_2012_nausea.md) | nausea probability ← istradefylline · direct linear effect | — | Knebel W et al., Population pharmacokinetic-pharmacodyna…, Journal of clinical pharmac… (2012) | [10.1177/0091270011420566](https://doi.org/10.1177/0091270011420566) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Knebel_2012_OFF_time](drugs/drug_istradefylline/pd_Knebel_2012_OFF_time.md) | percentage OFF time ← istradefylline · direct Emax (saturable) effect | — | Knebel W et al., Population pharmacokinetic-pharmacodyna…, Journal of clinical pharmac… (2012) | [10.1177/0091270011420566](https://doi.org/10.1177/0091270011420566) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=istradefylline).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` inhibitor, `ABCG2` inhibitor | DrugBank actor |
| distribution | blood | `ALB` binder, `ORM1` binder | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` inhibitor, `ABCG2` inhibitor | DrugBank actor |
| distribution | mammary gland | `ABCG2` inhibitor | DrugBank actor |
| distribution | placenta | `ABCB1` inhibitor | DrugBank actor |
| distribution | testis | `ABCB1` inhibitor, `ABCG2` inhibitor | DrugBank actor |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2B6` substrate, `CYP2C8` substrate, `CYP2C9` substrate, `CYP2D6` substrate, `CYP3A4` inhibitor/substrate, `CYP3A5` substrate, `SLCO1B1` inhibitor, `SLCO1B3` inhibitor | DrugBank actor |
| metabolism | lung | `CYP1A1` substrate | DrugBank actor |
| metabolism | small intestine | `CYP1A1` substrate, `CYP3A4` inhibitor/substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `ABCB1` inhibitor, `SLC22A6` inhibitor, `SLC47A1` inhibitor, `SLC47A2` inhibitor | DrugBank actor |
| excretion | liver | `ABCB1` inhibitor, `ABCG2` inhibitor, `SLC47A1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ADORA1 (target), ADORA2A (target), CYP2C18 (substrate), POU2F2 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 14:33 | 0:50 | 0/1/0 | 1/0/0 | 0/0/0 | 24,632/10,247 | ollama / glm-5.3-flash | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Knebel_2011.pdf` | Knebel W et al., Population pharmacokinetic analysis of…, Journal of clinical pharmac… (2011) | popPK | 10 | [10.1177/0091270010363809](https://doi.org/10.1177/0091270010363809) | [20200269](https://pubmed.ncbi.nlm.nih.gov/20200269) | Population PK model of istradefylline with all typical parameter values (CL/F, V2/F, Q/F, V3/F, Ka) reported directly in the abstract. |
| `Knebel_2012.pdf` | Knebel W et al., Population pharmacokinetic-pharmacodyna…, Journal of clinical pharmac… (2012) | popPK | 7 | [10.1177/0091270011420566](https://doi.org/10.1177/0091270011420566) | [22162533](https://pubmed.ncbi.nlm.nih.gov/22162533) | Population PK-PD analysis of istradefylline in humans, but the evidence shows only PD (Emax) parameters; PK disposition values (CL, V) are not present and likely reside in supplementary material. |

<sub>queue written 2026-10-06 14:32 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Barret_2014 | irrelevant | 1 | 1 | Istradefylline is only mentioned as a comparator; the study models PET receptor occupancy of tozadenant/preladenant in monkeys, with no istradefylline PK parameters reported. |
| popPK | Brooks_2008 | irrelevant | 2 | 2 | PET receptor-binding study of [11C]istradefylline; no disposition PK parameters (CL, V, half-life) for istradefylline are reported, only binding/occupancy values. |
| popPK | Gündel_2022 | irrelevant | 1 | 2 | Istradefylline is used only as a blocking/pre-treatment agent; the PK parameters (AUC, MRT, BPND, VT) reported are for the PET radiotracer [18F]FLUDA, not for istradefylline itself. |
| popPK | Knebel_2012 | relevant | 7 | 3 | Population PK-PD analysis of istradefylline in humans, but the evidence shows only PD (Emax) parameters; PK disposition values (CL, V) are not present and likely reside in supplementary material. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bistradefylline%5D&body=Drug%3A%20istradefylline%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_istradefylline/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-06 14:32 UTC</sub>
