<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;butriptyline&quot;}]"></div>

# butriptyline

- **generic name:** butriptyline
- **ATC codes:** `N06AA15`
- **DrugBank:** [DB09016](https://go.drugbank.com/drugs/DB09016) · **PubChem:** [CID 21772](https://pubchem.ncbi.nlm.nih.gov/compound/21772)
- **groups:** approved, withdrawn

## About

Butriptyline is a tricyclic antidepressant that was used to treat depression and also has anxiolytic effects. It has been withdrawn and is no longer marketed.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q904524](https://www.wikidata.org/wiki/Q904524) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| butriptyline | parent | 293.454 | C21H27N | PubChem | [21772](https://pubchem.ncbi.nlm.nih.gov/compound/21772) | Bourgouin_1981 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Bourgouin_1981_reference](drugs/drug_butriptyline/Butriptyline_Bourgouin1981_reference.md) | — | 1-compartment (no model) | 3 | Bourgouin J et al., Butriptyline: human pharmacokinetics an…, Biopharmaceutics & drug dis… (1981) | [10.1002/bdd.2510020204](https://doi.org/10.1002/bdd.2510020204) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=butriptyline).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| — | brain | `SLC6A4` inhibitor/target | DrugBank actor |
| — | platelet | `SLC6A4` inhibitor/target | DrugBank actor |

<sub>Actors without a tissue in the table: HRH1 (target), HTR2A (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 22:11 | 0:22 | 0/1/0 | 0/0/0 | 0/0/0 | 15,894/954 | ollama / glm-5.3-flash | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bourgouin_1981.pdf` | Bourgouin J et al., Butriptyline: human pharmacokinetics an…, Biopharmaceutics & drug dis… (1981) | popPK | 8 | [10.1002/bdd.2510020204](https://doi.org/10.1002/bdd.2510020204) | [6894708](https://pubmed.ncbi.nlm.nih.gov/6894708) | Human PK study with two-compartment model; some numeric values (Tmax, Cmax, half-life ~20 h) present in abstract, but full CL/V parameters likely in tables not shown. |
| `Randrup_1977.pdf` | Randrup A et al., Uptake inhibition of biogenic amines by…, Psychopharmacology (1977) | pd | 4 | [10.1007/BF00492370](https://doi.org/10.1007/BF00492370) | [408861](https://www.ncbi.nlm.nih.gov/pubmed/408861) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-06T22:11:15.695682+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Amsterdam_1980 | irrelevant | 1 | 0 | A review of tricyclic antidepressant PK that only mentions butriptyline as needing further study, with no quantitative parameters. |
| popPK | Bonnet_1984 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of dopamine uptake/release in rat synaptosomes, not a pharmacokinetic study reporting disposition parameters for butriptyline. |
| PD | Bonnet_1984 | not_relevant | 3 | 2 | The paper reports a qualitative observation of dopamine release at high concentrations (&gt;3 x 10^-6 M) for butriptyline but does not provide specific numeric PD parameters (like IC50 or Emax) or a full concentration-effect curve for this specific drug in the provided text. |
| popPK | Boyer_1980 | irrelevant | 0 | 0 | A narrative review of plasma level–efficacy correlations with no quantitative PK parameters for butriptyline. |
| popPK | Crawley_1981 | irrelevant | 0 | 0 | The paper is a behavioral pharmacology study using butriptyline only as a negative control to demonstrate specificity, with no pharmacokinetic parameters reported. |
| PD | Crawley_1981 | not_relevant | 0 | 0 | The paper only qualitatively states that butriptyline did not produce the behavioral effect in a specific animal model, without providing any numeric dose-response data, concentration-effect curves, or PD parameters. |
| popPK | Guelfi_1983 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial comparing butriptyline and amitriptyline, reporting no pharmacokinetic parameters. |
| PD | Guelfi_1983 | not_relevant | 0 | 0 | The paper is a clinical trial comparing efficacy and side effects at fixed/flexible doses but does not report plasma concentrations or any quantitative exposure-response or dose-response modeling. |
| popPK | Kopanski_1983 | irrelevant | 0 | 0 | This is a receptor pharmacology study in rat brain slices with no PK disposition parameters for butriptyline. |
| popPK | Randrup_1977 | irrelevant | 0 | 0 | no_text gate: only 118 chars of text extracted (&lt; 400) |
| PD | Randrup_1977 | not_relevant | 0 | 0 | The paper is a theoretical review discussing the dopamine hypothesis and amine uptake inhibition, containing no experimental PK/PD data or numeric parameters for butriptyline. |
| popPK | Risch_1979 | irrelevant | 0 | 0 | This is a review of plasma level–efficacy relationships; butriptyline is only mentioned as awaiting further study, with no PK parameters reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-06 22:11 UTC</sub>
