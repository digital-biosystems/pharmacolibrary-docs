<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;mirtazapine&quot;}]"></div>

# mirtazapine

- **generic name:** mirtazapine
- **ATC codes:** `N06AX11`
- **DrugBank:** [DB00370](https://go.drugbank.com/drugs/DB00370) · **PubChem:** [CID 4205](https://pubchem.ncbi.nlm.nih.gov/compound/4205)
- **molar mass:** 265.3529 g/mol (C17H19N3) — DrugBank
- **groups:** approved, investigational

## About

Mirtazapine is an antidepressant used for depression, and has also been used for anxiety, insomnia and related sleep and neurotic disorders. It is an approved medicine and is widely used in human medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q421930](https://www.wikidata.org/wiki/Q421930) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| mirtazapine | parent | 265.353 | C17H19N3 | DrugBank | [4205](https://pubchem.ncbi.nlm.nih.gov/compound/4205) | Yan_2026 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C2 negative clearance/volume in a covariate scenario or base (implausible — bas…</sub> | [Yan_2026_reference](drugs/drug_mirtazapine/Mirtazapine_Yan2026_reference.md) | — | 1-compartment (no model) | 4 | Yan H et al., Optimizing Mirtazapine Initial Dosing:…, Drug design, development an… (2026) | [10.2147/DDDT.S601238](https://doi.org/10.2147/DDDT.S601238) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Park_2023_5_HT3_current](drugs/drug_mirtazapine/pd_Park_2023_5_HT3_current.md) | 5-HT3 receptor current inhibition ← mirtazapine · direct sigmoid Emax (Hill) effect | — | Park YS et al., Atypical antidepressant mirtazapine inh…, Journal of pharmacological… (2023) | [10.1016/j.jphs.2022.12.002](https://doi.org/10.1016/j.jphs.2022.12.002) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Pawlyk_2006_5_HT2A](drugs/drug_mirtazapine/pd_Pawlyk_2006_5_HT2A.md) | functional antagonism at cloned human 5-HT2A receptor ← mirtazapine · direct Emax (saturable) effect | — | Pawlyk AC et al., Effects of the 5-HT2A antagonist mirtaz…, Brain research (2006) | [10.1016/j.brainres.2006.09.050](https://doi.org/10.1016/j.brainres.2006.09.050) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=mirtazapine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2D6` substrate, `CYP3A4` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| — | brain | `SLC6A4` inhibitor/substrate | DrugBank actor |
| — | platelet | `SLC6A4` inhibitor/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: 5HT3 serotonin receptor (target), ADRA1A (target), ADRA2A (target), HRH1 (target), HTR2A (target), HTR2C (target), OPRK1 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:42 | 1:32 | 0/1/0 | 2/0/0 | 0/0/0 | 86,320/5,966 | ollama / glm-5.3-flash | 11 | 2/1 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 18 matched, 12 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Grasmäder_2004.pdf` | Grasmäder K et al., Population pharmacokinetic analysis of…, European journal of clinica… (2004) | popPK | 10 | [10.1007/s00228-004-0737-0](https://doi.org/10.1007/s00228-004-0737-0) | [15289959](https://pubmed.ncbi.nlm.nih.gov/15289959) | Population PK (nonmem) of mirtazapine in 65 patients, but only a relative 26% clearance effect is given; full parameter values not in evidence. |

<sub>queue written 2026-10-06 23:41 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Blumenthal_2014 | irrelevant | 0 | 0 | This is an EHR weight-gain outcomes study with no pharmacokinetic parameters for mirtazapine. |
| popPK | Cardon-Dunbar_2017 | irrelevant | 0 | 0 | PK parameters are for pramipexole; mirtazapine is only a co-ingestant with no quantitative PK data. |
| popPK | Furukawa_2018 | irrelevant | 0 | 0 | This is an efficacy meta-analysis of antidepressant trials; no pharmacokinetic parameters for mirtazapine are reported. |
| popPK | Grasmäder_2004 | relevant | 10 | 3 | Population PK (nonmem) of mirtazapine in 65 patients, but only a relative 26% clearance effect is given; full parameter values not in evidence. |
| popPK | Munk_2011 | irrelevant | 3 | 2 | PET receptor-binding study of radiolabeled mirtazapine reporting distribution volumes/binding potentials in tables, not systemic disposition PK parameters (CL, V, ka); numeric values referenced in tables not fully present in evidence. |
| popPK | Nowakowska_1999 | irrelevant | 0 | 0 | Behavioral/pharmacodynamic study in rats with no PK parameters reported. |
| popPK | Park_2023 | irrelevant | 0 | 0 | In-vitro electrophysiology study of receptor currents, no pharmacokinetic parameters for mirtazapine. |
| popPK | Pawlyk_2006 | irrelevant | 0 | 0 | Pharmacodynamic study of mirtazapine's thermoregulatory effects in rats; no PK disposition parameters reported. |
| popPK | Puzhko_2021 | irrelevant | 0 | 0 | This is a prescribing-pattern study with no pharmacokinetic parameters for mirtazapine; only prescribing odds ratios appear. |
| popPK | Schneier_2015 | irrelevant | 0 | 0 | Clinical efficacy trial of mirtazapine in PTSD with no pharmacokinetic parameters reported. |
| popPK | Ueno_2015 | irrelevant | 0 | 0 | Clinical dose-response trial with no pharmacokinetic parameters reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmirtazapine%5D&body=Drug%3A%20mirtazapine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_mirtazapine/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-06 23:41 UTC</sub>
