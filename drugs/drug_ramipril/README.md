<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09A&quot;,&quot;href&quot;:&quot;atc/C09A.md&quot;},{&quot;label&quot;:&quot;ramipril&quot;}]"></div>

# ramipril

- **generic name:** ramipril
- **ATC codes:** `C09AA05`, `C09BA05`, `C09BB05`, `C09BB07`, `C09BX05`, `C10BX04`, `C10BX06`, `C10BX17`, `C10BX18`
- **DrugBank:** [DB00178](https://go.drugbank.com/drugs/DB00178) · **PubChem:** [CID 5362129](https://pubchem.ncbi.nlm.nih.gov/compound/5362129)
- **molar mass:** 416.5106 g/mol (C23H32N2O5) — DrugBank
- **groups:** approved, investigational

## About

Ramipril is an ACE inhibitor used to treat arterial hypertension and congestive heart failure. It is an approved prescription drug, widely used for cardiovascular conditions and available in combination products with diuretics, calcium channel blockers, and lipid-modifying agents.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q412666](https://www.wikidata.org/wiki/Q412666) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ramipril | parent | 416.511 | C23H32N2O5 | DrugBank | [5362129](https://pubchem.ncbi.nlm.nih.gov/compound/5362129) | Trobec_2024 |
| ramiprilat | metabolite | 388.464 | C21H28N2O5 | PubChem | [5464096](https://pubchem.ncbi.nlm.nih.gov/compound/5464096) | Trobec_2024 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:26 | 10:42 | 0/1/0 | 0/0/0 | 0/0/0 | 204,038/28,420 | ollama / qwen3.8:27b-mtp-q8_0 | 9 | 5/4 | 6/3 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.636), gpt-oss:120b (not confirmed, agreement 0.391). The first reading is what the record holds.">cross-check: disputed 0/2</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Trobec_2024_reference](drugs/drug_ramipril/Ramipril_Trobec2024_reference.md) | — | parent + metabolite (no model) | 8 (+1 cov.) | Trobec KČ et al., Population pharmacokinetics of ramipril…, Acta pharmaceutica (Zagreb,… (2024) | [10.2478/acph-2024-0018](https://doi.org/10.2478/acph-2024-0018) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=ramipril).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `SLC15A1` substrate | DrugBank actor |
| metabolism | blood | `BCHE` inhibitor | DrugBank actor |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `BCHE` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC15A2` substrate | DrugBank actor |
| excretion | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ACE (inhibitor), BDKRB1 (activator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 13 matched, 13 returned
- **screened:** 10  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Brockmeier_1995.pdf` | Brockmeier D, Tight binding of ramiprilat to ACE: con…, International journal of cl… (1995) | popPK | 8 | not captured | [8963479](https://pubmed.ncbi.nlm.nih.gov/8963479) | The paper discusses the non-linear pharmacokinetics of ramipril/ramiprilat in humans and references a study with data, but the specific numeric parameter values (CL, V, etc.) are not explicitly listed in the provided abstract text. |

<sub>queue written 2026-10-07T07:17:39.644808+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Brockmeier_1995 | relevant | 8 | 2 | The paper discusses the non-linear pharmacokinetics of ramipril/ramiprilat in humans and references a study with data, but the specific numeric parameter values (CL, V, etc.) are not explicitly listed in the provided abstract text. |
| popPK | Chatsiricharoenkul_2011 | irrelevant | 4 | 2 | The study reports bioequivalence ratios and confidence intervals for AUC and Cmax, but does not provide absolute quantitative disposition parameters (CL, V, ka) or a compartmental model for ramipril. |
| popPK | Chen_2024 | irrelevant | 0 | 0 | The study is a clinical trial analyzing uromodulin biomarkers and kidney outcomes, where ramipril is only a comparator drug for blood pressure control, not the subject of pharmacokinetic analysis. |
| popPK | Komolafe_2018 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of plant extracts where ramipril is used only as a reference standard for ACE inhibition, not as a subject for pharmacokinetic analysis. |
| popPK | Krieger_1987 | irrelevant | 0 | 0 | The study is a mechanistic investigation of angiotensin-converting enzyme activity in isolated rat kidneys, not a pharmacokinetic study reporting disposition parameters for ramipril. |
| popPK | Raasch_2005 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of noradrenaline release and enzyme inhibition in rats, not a pharmacokinetic study reporting disposition parameters for ramipril. |
| popPK | Ragot_2016 | irrelevant | 0 | 0 | The study analyzes renal function trajectories (eGFR/SCr) and cardiovascular risk in diabetes cohorts, with ramipril mentioned only as part of the trial name (DIABHYCAR) or as a background treatment, not as the subject of pharmacokinetic analysis. |
| popPK | Russell_2004 | irrelevant | 0 | 0 | The study investigates the metabolic and vascular effects of ramipril in rats but does not report any pharmacokinetic parameters (clearance, volume, half-life) for the drug. |
| PD | Russell_2004 | not_relevant | 2 | 1 | Animal study with fixed-dose ramipril; reported EC50s are for vasodilators (ACh, SNP, bradykinin) in vitro, not a ramipril exposure- or dose-response relationship, and no ramipril PK/PD parameters are derivable. |
| popPK | Russell_2005 | irrelevant | 0 | 0 | The study investigates the metabolic and vascular effects of cariporide and ramipril in animal models, but does not report any pharmacokinetic parameters (clearance, volume, half-life) for ramipril. |
| PD | Russell_2005 | not_relevant | 1 | 1 | Ramipril appears only as a qualitative reference comparator in animal groups (percent changes, group comparisons); no ramipril concentration- or dose-effect relationship or numeric PD parameters (Emax/EC50 vs ramipril exposure) are reported or derivable. |
| popPK | Sarfo_2024 | irrelevant | 0 | 0 | The study is a clinical trial assessing cognitive outcomes in stroke patients using a polypill containing ramipril, and it does not report any pharmacokinetic parameters for ramipril. |
| popPK | Schmidt_1986 | irrelevant | 0 | 0 | The study is an in-vitro/ex-vivo pharmacological investigation of ACE inhibition on renal vasoconstriction, not a pharmacokinetic study reporting disposition parameters for ramipril. |
| PD | Schmidt_1986 | not_relevant | 2 | 1 | Numeric EC50/pA2 values describe angiotensin I/II vasoconstriction in isolated rat kidney, not a ramipril/ramiprilat exposure- or dose-response relationship, which is only tested at fixed single doses with a qualitative rightward shift. |
| popPK | Wang_2016 | irrelevant | 0 | 0 | The study models disease progression (Ang II, ADMA, NO, SBP) in rats where ramipril is used as a therapeutic intervention, but it does not report pharmacokinetic parameters (CL, V, ka) for ramipril itself. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 07:17 UTC</sub>
