<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;perphenazine&quot;}]"></div>

# perphenazine

- **generic name:** perphenazine
- **ATC codes:** `N05AB03`
- **DrugBank:** [DB00850](https://go.drugbank.com/drugs/DB00850) · **PubChem:** [CID 4748](https://pubchem.ncbi.nlm.nih.gov/compound/4748)
- **molar mass:** 403.969 g/mol (C21H26ClN3OS) — DrugBank
- **groups:** approved, investigational

## About

Perphenazine is an antipsychotic of the phenothiazine class used to treat schizophrenia and other psychotic conditions, and has also been used for vomiting, Tourette syndrome, Huntington's disease, and anxiety. It remains an approved medicine, though it carries a boxed warning and is not authorised centrally in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q423520](https://www.wikidata.org/wiki/Q423520) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| perphenazine | parent | 403.969 | C21H26ClN3OS | DrugBank | [4748](https://pubchem.ncbi.nlm.nih.gov/compound/4748) | Jin_2010 |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 483 | L/h | 483 L/h | adults with schizophrenia (CATIE) | 156 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Jin_2010_reference](drugs/drug_perphenazine/Perphenazine_Jin2010_reference.md) |
| V | V | 1.82e+04 | L | 18200 L | adults with schizophrenia (CATIE) | 156 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Jin_2010_reference](drugs/drug_perphenazine/Perphenazine_Jin2010_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub> | [Jin_2010_reference](drugs/drug_perphenazine/Perphenazine_Jin2010_reference.md) | — | 1-compartment (no model) | 2 | Jin Y et al., Population pharmacokinetics of perphena…, Journal of clinical pharmac… (2010) | [10.1177/0091270009343694](https://doi.org/10.1177/0091270009343694) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Otreba_2016_cell_viability](drugs/drug_perphenazine/pd_Otreba_2016_cell_viability.md) | cell viability ← perphenazine · direct Emax (saturable) effect | — | Otreba M et al., FLUPHENAZINE AND PERPHENAZINE IMPACT ON…, Acta poloniae pharmaceutica (2016) | — |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Otręba_2018_cell_viability_U87_MG_cells](drugs/drug_perphenazine/pd_Otr_ba_2018_cell_viability_U87_MG_cells.md) | cell viability (U87-MG cells) ← perphenazine · inhibition effect | — | Otręba M et al., Perphenazine and prochlorperazine induc…, Die Pharmazie (2018) | [10.1691/ph.2018.7806](https://doi.org/10.1691/ph.2018.7806) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=perphenazine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` regulator | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2C19` substrate, `CYP2C8` substrate, `CYP2C9` substrate, `CYP2D6` inhibitor/substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: CALM1 (inhibitor), CYP2C18 (substrate), DRD1 (target), DRD2 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 16:27 | 0:41 | 1/0/0 | 2/0/0 | 0/0/0 | 35,095/1,893 | ollama / glm-5.3-flash | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Jin_2010.pdf` | Jin Y et al., Population pharmacokinetics of perphena…, Journal of clinical pharmac… (2010) | popPK | 10 | [10.1177/0091270009343694](https://doi.org/10.1177/0091270009343694) | [19843655](https://pubmed.ncbi.nlm.nih.gov/19843655) | Population PK model of perphenazine with CL and V values reported directly in the abstract. |

<sub>queue written 2026-10-06 16:27 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bustamante_2019 | irrelevant | 1 | 0 | Perphenazine is only a repurposing candidate with an in vitro EC50; no PK disposition parameters are reported, and any PK simulations are not quantified in the evidence. |
| popPK | Hensler_1987 | irrelevant | 0 | 0 | Perphenazine appears only as a receptor antagonist potency ranking in an in vitro pharmacology study, with no PK parameters. |
| popPK | Hermes_2011 | irrelevant | 0 | 0 | This is a clinical trial analysis of weight change and symptom scores with no pharmacokinetic parameters for perphenazine. |
| popPK | Otreba_2016 | irrelevant | 0 | 0 | In-vitro melanocyte toxicity study with no PK disposition parameters for perphenazine. |
| popPK | Otręba_2018 | irrelevant | 0 | 0 | In-vitro cytotoxicity study (EC50 in U87-MG cells) with no PK disposition parameters for perphenazine. |
| popPK | Overo_1977 | irrelevant | 2 | 2 | Perphenazine is only the interacting co-administered drug; the PK parameters reported are for nortriptyline, not perphenazine itself. |
| popPK | Perera_2014 | irrelevant | 4 | 2 | Uses prior population-PK parameters for perphenazine but reports no numeric PK parameter values (only CV% and sampling times); actual parameters likely in prior publications/supplements. |
| popPK | Yukawa_2002 | irrelevant | 0 | 0 | This is a population PK study of haloperidol; perphenazine is only mentioned as a co-administered CYP2D6 substrate, with no perphenazine parameters reported. |
| popPK | Zang_2021 | irrelevant | 2 | 3 | Perphenazine is only a covariate affecting olanzapine clearance (0.78-fold); no perphenazine PK parameters are reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bperphenazine%5D&body=Drug%3A%20perphenazine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_perphenazine/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-06 16:27 UTC</sub>
