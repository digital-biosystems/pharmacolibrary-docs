<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C03C&quot;,&quot;href&quot;:&quot;atc/C03C.md&quot;},{&quot;label&quot;:&quot;muzolimine&quot;}]"></div>

# muzolimine

- **generic name:** muzolimine
- **ATC codes:** `C03CD01`
- **DrugBank:** [DB13801](https://go.drugbank.com/drugs/DB13801) · **PubChem:** not captured
- **molar mass:** 272.13 g/mol (C11H11Cl2N3O) — DrugBank
- **groups:** approved, withdrawn

## About

Muzolimine is a loop-type (high-ceiling) diuretic that was used to treat fluid retention and high blood pressure. It has been withdrawn and is no longer in clinical use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3868794](https://www.wikidata.org/wiki/Q3868794) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| muzolimine | parent | 272.13 | C11H11Cl2N3O | DrugBank | — | Brørs_1979 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Brørs_1979_reference](drugs/drug_muzolimine/Muzolimine_Brrs1979_reference.md) | — | 1-compartment (no model) | 2 | Brørs O et al., Pharmacokinetics of a single oral dose…, European journal of clinica… (1979) | [10.1007/BF00609872](https://doi.org/10.1007/BF00609872) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 19:30 | 2:07 | 0/1/0 | 0/0/0 | 0/0/0 | 18,773/4,989 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Brørs_1979.pdf` | Brørs O et al., Pharmacokinetics of a single oral dose…, European journal of clinica… (1979) | popPK | 10 | [10.1007/BF00609872](https://doi.org/10.1007/BF00609872) | [436918](https://pubmed.ncbi.nlm.nih.gov/436918) | The study reports quantitative pharmacokinetic parameters (half-lives, renal clearance) for muzolimine in humans, with specific numeric values provided in the text. |
| `Ritter_1985.pdf` | Ritter W et al., Pharmacokinetics of muzolimine after or…, Zeitschrift fur Kardiologie… (1985) | popPK | 10 | not captured | [4002791](https://pubmed.ncbi.nlm.nih.gov/4002791) | The study reports quantitative PK parameters for muzolimine in humans, but the specific numeric values are not present in the provided evidence text. |
| `Geck_1986.pdf` | Geck P et al., Inhibition of ion transport in Ehrlich…, Naunyn-Schmiedeberg's archi… (1986) | pd | 5 | [10.1007/BF00512948](https://doi.org/10.1007/BF00512948) | [2429195](https://www.ncbi.nlm.nih.gov/pubmed/2429195) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-06T19:28:20.368727+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Morachiello_1985 | not_relevant | 2 | 1 | The paper describes a clinical comparison of diuretic effects (urine volume, Na+ excretion) at different doses but does not provide numeric concentration-effect data, PK/PD parameters (Emax, EC50), or a formal dose-response curve analysis. |
| PD | Pohlmann-Eden_1991 | not_relevant | 1 | 0 | The paper is a case series reporting adverse events (neuromyeloencephalopathy) associated with high doses of muzolimine but does not provide any quantitative pharmacodynamic modeling, concentration-effect curves, or numeric PD parameters like Emax or EC50. |
| popPK | Ritter_1985 | relevant | 10 | 0 | The study reports quantitative PK parameters for muzolimine in humans, but the specific numeric values are not present in the provided evidence text. |
| PD | Russo_1992 | not_relevant | 1 | 0 | The text is a qualitative review of the clinical use of loop diuretics in renal failure and contains no numeric PD parameters, concentration-effect data, or dose-response analysis for muzolimine. |
| PD | Sastry_1988 | not_relevant | 0 | 0 | The paper describes spectrophotometric analytical methods for quantifying muzolimine, not pharmacodynamic or exposure-response relationships. |
| PD | Schwartz_1986 | not_relevant | 1 | 0 | The text is a general review of diuretics that mentions muzolimine's duration of action and protein binding qualitatively, but provides no numeric PD parameters, dose-response curves, or exposure-response analysis. |
| PD | Stríbrná_1988 | not_relevant | 0 | 0 | The paper focuses on circadian rhythms of electrolyte excretion in renal insufficiency and does not report a pharmacodynamic or exposure-response model with numeric PD parameters for muzolimine. |
| PD | Toutain_1986 | not_relevant | 0 | 0 | The paper reports a qualitative comparison of nephrotoxicity markers between two fixed-dose groups (gentamicin alone vs. gentamicin + muzolimine) without providing concentration-effect data, dose-response curves, or numeric PD parameters for muzolimine. |
| PD | de_1985 | not_relevant | 1 | 0 | The paper reports clinical blood pressure changes at a fixed dose but does not provide plasma concentration data or a formal exposure-response/dose-response model with numeric PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-06 19:28 UTC</sub>
