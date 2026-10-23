<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;midostaurin&quot;}]"></div>

# midostaurin

- **generic name:** midostaurin
- **ATC codes:** `L01EX10`, `L01XE`
- **DrugBank:** [DB06595](https://go.drugbank.com/drugs/DB06595) · **PubChem:** [CID 9829523](https://pubchem.ncbi.nlm.nih.gov/compound/9829523)
- **molar mass:** 570.649 g/mol (C35H30N4O4) — DrugBank
- **groups:** approved, investigational

## About

Midostaurin is a protein kinase inhibitor used to treat acute myeloid leukemia and, in the European Union, also mastocytosis. It is an approved anticancer medicine authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q6842945](https://www.wikidata.org/wiki/Q6842945) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| midostaurin | parent | 570.649 | C35H30N4O4 | DrugBank | [9829523](https://pubchem.ncbi.nlm.nih.gov/compound/9829523) | Joisten_2026, Yin_2008 |
| CGP52421 | metabolite | 586.648 | C35H30N4O5 | PubChem | [137552093](https://pubchem.ncbi.nlm.nih.gov/compound/137552093) | Yin_2008 |
| CGP62221 | metabolite | 556.622 | C34H28N4O4 | PubChem | [11261445](https://pubchem.ncbi.nlm.nih.gov/compound/11261445) | Yin_2008 |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 0.52 | L/h | 0.52 L/h | patients with FLT3-mutated AML receiving concomitant midostaurin and posaconazole | 29 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Joisten_2026_reference](drugs/drug_midostaurin/Midostaurin_Joisten2026_reference.md) |
| ka | kabs | 0.0304 | 1/h | 0.0304 1/h | patients with FLT3-mutated AML receiving concomitant midostaurin and posaconazole | 29 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Joisten_2026_reference](drugs/drug_midostaurin/Midostaurin_Joisten2026_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Joisten_2026_reference](drugs/drug_midostaurin/Midostaurin_Joisten2026_reference.md) | — | 1-compartment (no model) | 2 | Joisten CS et al., Clinical impact of potential drug-drug…, Antimicrobial agents and ch… (2026) | [10.1128/aac.01951-25](https://doi.org/10.1128/aac.01951-25) |
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Yin_2008_reference](drugs/drug_midostaurin/Midostaurin_Yin2008_reference.md) | — | general linear (no model) | 2 | Yin OQ et al., A mechanism-based population pharmacoki…, Clinical pharmacokinetics (2008) | [10.2165/0003088-200847120-00005](https://doi.org/10.2165/0003088-200847120-00005) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=midostaurin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP3A5` inducer | DrugBank actor |
| metabolism | liver | `CYP1A2` inducer/inhibitor, `CYP2B6` inducer, `CYP2C19` inducer/inhibitor, `CYP2C8` inducer/inhibitor, `CYP2C9` inducer/inhibitor, `CYP2D6` inhibitor, `CYP2E1` inhibitor, `CYP3A4` inducer/inhibitor/substrate, `CYP3A5` inducer, `CYP3A7` inducer | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/inhibitor/substrate, `CYP3A5` inducer | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: CYP3A43 (inducer), FLT3 (inhibitor), FLT3 (target), KDR (inhibitor), KDR (target), KIT (inhibitor), KIT (target), PDGFRA (inhibitor), PDGFRA (target), PDGFRB (inhibitor), PDGFRB (target), PRKCA (inhibitor), PRKCA (target), PRKCG (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 02:55 | 3:04 | 1/1/0 | 0/0/0 | 0/0/0 | 98,267/13,833 | openai / gpt-6-luna | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Yin_2008.pdf` | Yin OQ et al., A mechanism-based population pharmacoki…, Clinical pharmacokinetics (2008) | popPK | 10 | [10.2165/0003088-200847120-00005](https://doi.org/10.2165/0003088-200847120-00005) | [19026036](https://pubmed.ncbi.nlm.nih.gov/19026036) | Human population-PK model reports numeric midostaurin clearance and induction parameters. |

<sub>queue written 2026-10-07 02:52 UTC</sub>


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmidostaurin%5D&body=Drug%3A%20midostaurin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_midostaurin/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 02:52 UTC</sub>
