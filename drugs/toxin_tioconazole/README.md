<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Tioconazole&quot;}]"></div>

# Tioconazole

- **generic name:** Tioconazole
- **T3DB:** [T3D2956](http://www.t3db.ca/toxins/T3D2956) · **DrugBank:** [DB01007](https://go.drugbank.com/drugs/DB01007) · **PubChem:** [CID 5482](https://pubchem.ncbi.nlm.nih.gov/compound/5482)
- **groups:** approved

## About

Tioconazole is an antifungal medication of the Imidazole class used to treat infections caused by a fungus or yeast. Tioconazole topical (skin) preparations are also available for ringworm, jock itch, athlete's foot, and tinea versicolor or "sun fungus". Tioconazole interacts with 14-alpha demethylase, a cytochrome P-450 enzyme that converts lanosterol to ergosterol, an essential component of the yeast membrane. In this way, tioconazole inhibits ergosterol synthesis, resulting in increased cellular permeability.

- **Category:** Drug, Synthetic Toxin
- **Route of exposure:** systemic absorption following a single intravaginal application of tioconazole in nonpregnant patients is negligible.
- **Sources and uses:** For the local treatment of vulvovaginal candidiasis (moniliasis).
- **Mechanism of toxicity:** Tioconazole interacts with 14-&alpha; demethylase, a cytochrome P-450 enzyme that converts lanosterol to ergosterol, an essential component of the yeast membrane. In this way, tioconazole inhibits ergosterol synthesis, resulting in increased cellular permeability. …

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D2956">T3DB T3D2956</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 65899-73-2 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:774389">ChEBI 774389</a></small></p>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=tioconazole).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP2C19` inhibitor, `CYP2E1` inhibitor, `CYP3A4` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor | DrugBank actor |
| — | adipose tissue | `CYP19A1` inhibitor | DrugBank actor |
| — | ovary | `CYP19A1` inhibitor | DrugBank actor |
| — | testis | `CYP19A1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: CYP51A1 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-13 03:59 | 3:15 | 0/0/0 | 0/0/0 | 0/0/0 | 102,357/2,518 | ollama / glm-5.3-flash | 4 | 0/4 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 23 matched, 23 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ajaiyeoba_2003 | irrelevant | 0 | 0 | Tioconazole appears only as a reference antibiotic standard; no kinetic parameters are reported. |
| PGx | Bourcier_2010 | not_relevant | 2 | 3 | Enzyme kinetics of UGTs as substrates without any gene variant/genotype/phenotype effect on tioconazole PK or PD parameters. |
| popPK | Calvo_2019 | irrelevant | 3 | 5 | In vitro nanocapsule release kinetics in simulated vaginal fluid (Weibull β, release concentrations) are formulation characterization, not in vivo toxicokinetic parameters of tioconazole; no half-life, clearance, or absorption in a living organism. |
| popPK | Calvo_2019_2 | irrelevant | 1 | 0 | This is a formulation development study of tioconazole vaginal films with in vitro antifungal and characterization data, but no kinetic parameters (half-life, clearance, partition coefficients, etc.) for tioconazole are reported. |
| popPK | Calvo_2019_3 | irrelevant | 0 | 0 | This is an analytical/physicochemical characterization of tioconazole (DSC, NMR, spectroscopy) with no kinetic parameters such as half-life, clearance, or absorption rates. |
| popPK | Di_1992 | irrelevant | 0 | 0 | This is an analytical chemistry paper quantifying tioconazole in pharmaceutical creams via HPLC — no kinetic parameters, no in vivo data. |
| popPK | El-Salam_2020 | irrelevant | 0 | 0 | Clinical efficacy trial of topical treatments with no kinetic parameters for tioconazole. |
| popPK | El-Tatawy_2019 | irrelevant | 0 | 0 | Clinical efficacy study of topical tioconazole for onychomycosis with no kinetic parameters of any kind. |
| popPK | Fliri_2005 | irrelevant | 0 | 0 | A cheminformatics study using tioconazole's in vitro inhibition profile as a descriptor; no toxicokinetic parameters of tioconazole are reported. |
| popPK | Fromtling_1988 | irrelevant | 2 | 1 | A review overview with no numeric kinetic parameters for tioconazole presented in the evidence; values, if any, are not shown. |
| popPK | Han_2021 | irrelevant | 0 | 0 | This is a clinical efficacy meta-analysis of onychomycosis treatment with no toxicokinetic parameters for tioconazole. |
| popPK | Odds_1984 | irrelevant | 0 | 0 | In vitro antifungal potency assay (RIF) with no kinetic parameters of tioconazole — it is only a tested comparator; no numeric values present either. |
| popPK | Odds_1985 | irrelevant | 0 | 0 | In vitro biochemical study of ATP suppression in Candida with no kinetic parameters of tioconazole disposition. |
| popPK | Oloyede_2013 | irrelevant | 0 | 0 | Tioconazole appears only as an antifungal analytical standard (80 µg/ml) in antimicrobial screening; no kinetic parameters for tioconazole are reported anywhere. |
| popPK | Oloyede_2014 | irrelevant | 0 | 0 | Tioconazole appears only as a comparator standard for antimicrobial activity; no kinetic parameters for tioconazole. |
| popPK | Pieńko_2017 | irrelevant | 0 | 0 | Computational DFT study of adsorption energies on nanotransporters; no pharmacokinetic/toxicokinetic parameters for tioconazole. |
| PGx | Tie_2012 | not_relevant | 0 | 0 | Paper models CYP3A4 inhibition by chemicals (tioconazole as a potent inhibitor class); no gene variant/genotype effect on tioconazole PK/PD parameters is reported. |
| PGx | Zhang_2002 | not_relevant | 2 | 5 | Reports in vitro Ki values for tioconazole inhibition of CYPs, but no gene variant/genotype/phenotype effect on tioconazole PK/PD. |
| popPK | unknown_2021 | irrelevant | 0 | 0 | no_text gate: only 55 chars of text extracted (&lt; 400) |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btioconazole%5D&body=Drug%3A%20tioconazole%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_tioconazole/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
