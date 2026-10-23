<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R01A&quot;,&quot;href&quot;:&quot;atc/R01A.md&quot;},{&quot;label&quot;:&quot;naphazoline&quot;}]"></div>

# naphazoline

- **generic name:** naphazoline
- **ATC codes:** `R01AA08`, `R01AB02`, `S01GA01`
- **DrugBank:** [DB06711](https://go.drugbank.com/drugs/DB06711) · **PubChem:** [CID 4436](https://pubchem.ncbi.nlm.nih.gov/compound/4436)
- **molar mass:** 210.2744 g/mol (C14H14N2) — DrugBank
- **groups:** approved

## About

Naphazoline is a decongestant used to relieve nasal congestion in rhinitis and sinusitis, and to reduce redness of the eye. It is an approved medicine, used topically in nasal and eye preparations, and is widely available over the counter.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q415433](https://www.wikidata.org/wiki/Q415433) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=naphazoline).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ADRA1A (target), ADRA2A (target), DRD2 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 13:15 | 0:50 | 0/0/0 | 0/0/0 | 0/0/0 | 38,545/1,513 | ollama / glm-5.3-flash | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 17 matched, 17 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Sjöberg_1987.pdf` | Sjöberg T et al., Postjunctional alpha-adrenoceptors in h…, Pharmacology & toxicology (1987) | pd | 4 | [10.1111/j.1600-0773.1987.tb01717.x](https://doi.org/10.1111/j.1600-0773.1987.tb01717.x) | [2882498](https://www.ncbi.nlm.nih.gov/pubmed/2882498) | metadata signals extractable PD data (Emax) |
| `Wu_2017.pdf` | Wu SF et al., Pharmacological characterisation and fu…, Insect biochemistry and mol… (2017) | pd | 4 | [10.1016/j.ibmb.2017.06.008](https://doi.org/10.1016/j.ibmb.2017.06.008) | [28629966](https://www.ncbi.nlm.nih.gov/pubmed/28629966) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-07 13:14 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agrawal_1984 | irrelevant | 0 | 0 | In vitro pharmacology study using naphazoline only as an agonist probe; no PK parameters reported. |
| popPK | Díaz-Toledo_1988 | irrelevant | 0 | 0 | This is an in-vitro receptor pharmacology study (rat vas deferens) reporting dissociation constants and efficacy, not pharmacokinetic disposition parameters for naphazoline. |
| popPK | Ishikawa_1996 | irrelevant | 0 | 0 | In-vitro pharmacodynamics of imidazolines on bovine vascular tissue; no PK disposition parameters for naphazoline. |
| popPK | Lei_1998 | irrelevant | 0 | 0 | In-vitro receptor-binding/pharmacology study; naphazoline only appears as a chemical derivative, with no PK parameters. |
| popPK | Minker_1978 | irrelevant | 0 | 0 | In-vitro pharmacology study of adrenergic agonists on guinea pig ileum; naphazoline is a tool antagonist, no PK parameters. |
| popPK | Piascik_1991 | irrelevant | 0 | 0 | In vitro receptor-binding/vascular pharmacology study; naphazoline is a probe ligand, no PK parameters reported. |
| popPK | Sakurai_1983 | irrelevant | 0 | 0 | In-vitro mechanistic study of catecholamine secretion; no PK parameters for naphazoline. |
| popPK | Salazar-Bookaman_2006 | irrelevant | 0 | 0 | In-vitro receptor antagonism study in guinea-pig ileum; no pharmacokinetic parameters for naphazoline. |
| popPK | Sharif_1990 | irrelevant | 0 | 0 | In-vitro pharmacology study of adrenoceptors; naphazoline is only a test agonist, no PK parameters. |
| popPK | Sjöberg_1987 | irrelevant | 0 | 0 | In-vitro pharmacological receptor characterization; naphazoline is only an agonist probe, no PK parameters reported. |
| popPK | Starke_1975 | irrelevant | 0 | 0 | In-vitro pharmacodynamic potency study (EC20, pA2) of naphazoline as an agonist on rabbit artery strips; no PK disposition parameters. |
| popPK | Summers_1980 | irrelevant | 0 | 0 | In-vitro receptor binding study in rat cortex; naphazoline is only a displacing agent, no PK parameters reported. |
| popPK | Takayanagi_1986 | irrelevant | 0 | 0 | In-vitro pharmacology study of receptor antagonism; naphazoline is an agonist probe, no PK parameters. |
| popPK | Venkataraman_1991 | irrelevant | 0 | 0 | This is a receptor pharmacology (SAR) study reporting binding/affinity constants, not PK disposition parameters for naphazoline. |
| popPK | Wu_2012 | irrelevant | 0 | 0 | In vitro receptor pharmacology study in insect cells; naphazoline is only an agonist probe, no PK parameters. |
| popPK | Wu_2013 | irrelevant | 0 | 0 | Naphazoline is only tested as a non-activating ligand in an in-vitro receptor assay; no PK parameters reported. |
| popPK | Wu_2017 | irrelevant | 0 | 0 | Naphazoline is only used as a pharmacological agonist probe on an insect octopamine receptor; no PK parameters for naphazoline are reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bnaphazoline%5D&body=Drug%3A%20naphazoline%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_naphazoline/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
