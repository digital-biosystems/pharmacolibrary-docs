<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;fosamprenavir&quot;}]"></div>

# fosamprenavir

- **generic name:** fosamprenavir
- **ATC codes:** `J05AE07`
- **DrugBank:** [DB01319](https://go.drugbank.com/drugs/DB01319) · **PubChem:** [CID 131536](https://pubchem.ncbi.nlm.nih.gov/compound/131536)
- **molar mass:** 585.607 g/mol (C25H36N3O9PS) — DrugBank
- **groups:** approved, investigational

## About

Fosamprenovir is an antiretroviral protease inhibitor used to treat HIV/AIDS. It is administered orally in tablet or suspension forms. The drug remains in use in the United States, though the branded product was withdrawn from the market.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q1385311](https://www.wikidata.org/wiki/Q1385311), [Wikipedia](https://en.wikipedia.org/wiki/Fosamprenavir?oldid=1368554406) (CC BY-SA 4.0), DrugBank's routes and dosage forms, the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| amprenavir | metabolite | — (mass units only) | — | — | — | — |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Dailly_2008_reference](drugs/drug_fosamprenavir/Fosamprenavir_Dailly2008_reference.md) | — | 1-compartment (no model) | 0 | Dailly E et al., Impact of nevirapine or efavirenz co-ad…, Fundamental & clinical phar… (2008) | [10.1111/j.1472-8206.2007.00556.x](https://doi.org/10.1111/j.1472-8206.2007.00556.x) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 00:09 | 0:04 | 0/1/0 | 0/0/0 | 0/0/0 | 4,098/163 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Barbour_2014 | relevant | 10 | 3 | Study reports a population PK model for the prodrug fosamprenavir (metabolite amprenavir), but specific numeric parameter estimates (CL, V, Q) are not provided in the text. |
| PGx | Barbour_2014 | not_relevant | 0 | 0 | The paper reports covariates such as race and age, but does not mention any genetic variants or genotypes affecting pharmacokinetic parameters. |
| PGx | Dailly_2008 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions with nevirapine and efavirenz, not the impact of genetic variants or genotypes on pharmacokinetics. |
| popPK | Dolton_2014 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of posaconazole, with fosamprenavir mentioned only as a co-administered drug affecting posaconazole clearance, rather than as the subject of PK parameter estimation. |
| PGx | Dolton_2014 | not_relevant | 0 | 0 | The paper analyzes the pharmacokinetics of posaconazole, not fosamprenavir, and does not report genetic variants affecting PK/PD. |
| popPK | Jacqmin_2013 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and exposure-response of maraviroc, with fosamprenavir mentioned only as a component of the background regimen (OBT) and a minor covariate. |
| PGx | Jacqmin_2013 | not_relevant | 0 | 0 | The study analyzes the exposure-response relationship of maraviroc, not fosamprenavir, and does not report pharmacogenomic effects on fosamprenavir PK or PD. |
| popPK | Kan_2025 | irrelevant | 0 | 0 | The study focuses on the antiviral activity and molecular docking of fosamprenavir against Dengue virus, with no pharmacokinetic parameter estimation (CL, V, ka) for the drug itself. |
| PGx | Kan_2025 | not_relevant | 0 | 0 | The paper reports antiviral activity against dengue virus, not a pharmacogenomic effect on PK or PD parameters of fosamprenavir. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfosamprenavir%5D&body=Drug%3A%20fosamprenavir%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_fosamprenavir/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 00:08 UTC</sub>
