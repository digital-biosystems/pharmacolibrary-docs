<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07X&quot;,&quot;href&quot;:&quot;atc/N07X.md&quot;},{&quot;label&quot;:&quot;inotersen&quot;}]"></div>

# inotersen

- **generic name:** inotersen
- **ATC codes:** `N07XX15`
- **DrugBank:** [DB14713](https://go.drugbank.com/drugs/DB14713) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Inotersen is a nervous system drug used to treat amyloidosis. It is authorised in the European Union.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 3.4 | L/h | 3.4 L/h | healthy volunteers and patients with hATTR-PN | 197 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Yu_2020_2_reference](drugs/drug_inotersen/Inotersen_Yu2020v2_reference.md) |
| V | V1 | 20.7 | L | 20.7 L | healthy volunteers and patients with hATTR-PN | 197 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Yu_2020_2_reference](drugs/drug_inotersen/Inotersen_Yu2020v2_reference.md) |
| ka | kabs | 0.261 | 1/h | 0.261 1/h | healthy volunteers and patients with hATTR-PN | 197 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Yu_2020_2_reference](drugs/drug_inotersen/Inotersen_Yu2020v2_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C1_half_life_beta failed (ratio 24.0348)</sub> | [Yu_2020_2_reference](drugs/drug_inotersen/Inotersen_Yu2020v2_reference.md) | — | 2-compartment (no model) | 5 | Yu RZ et al., Population Pharmacokinetic-Pharmacodyna…, Nucleic acid therapeutics (2020) | [10.1089/nat.2019.0822](https://doi.org/10.1089/nat.2019.0822) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">Reproduces with caveats</span> | [Yu_2020_2_TTR](drugs/drug_inotersen/pd_Yu_2020_2_TTR.md) | serum TTR (transthyretin) level ← inotersen · indirect response — drug inhibits the production of serum TTR (transthyretin) level | — | Yu RZ et al., Population Pharmacokinetic-Pharmacodyna…, Nucleic acid therapeutics (2020) | [10.1089/nat.2019.0822](https://doi.org/10.1089/nat.2019.0822) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=inotersen).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: TTR (antisense oligonucleotide), Transthyretin mRNA (antisense oligonucleotide).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 05:05 | 2:14 | 1/0/0 | 1/0/0 | 0/0/0 | 115,193/7,976 | ollama / glm-5.3-flash | 2 | 1/1 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Coelho_2023 | irrelevant | 0 | 0 | This is a phase 3 efficacy/safety trial of eplontersen with inotersen only as a comparator/reference group; no PK parameters (CL, V, half-life, or population-PK model) for inotersen are reported. |
| popPK | Karam_2022 | irrelevant | 0 | 0 | This is an HRQL outcomes study with no PK parameters for inotersen. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 05:04 UTC</sub>
