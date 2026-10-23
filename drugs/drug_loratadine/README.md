<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R06A&quot;,&quot;href&quot;:&quot;atc/R06A.md&quot;},{&quot;label&quot;:&quot;loratadine&quot;}]"></div>

# loratadine

- **generic name:** loratadine
- **ATC codes:** `R06AX13`
- **DrugBank:** [DB00455](https://go.drugbank.com/drugs/DB00455) · **PubChem:** [CID 3957](https://pubchem.ncbi.nlm.nih.gov/compound/3957)
- **molar mass:** 382.883 g/mol (C22H23ClN2O2) — DrugBank
- **groups:** approved, investigational

## About

Loratadine is a non-sedating antihistamine used to treat allergies such as seasonal allergic rhinitis, urticaria, and sinus problems. It is widely used and appears on the WHO list of essential medicines, generally available without prescription.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q424049](https://www.wikidata.org/wiki/Q424049) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| loratadine | parent | 382.883 | C22H23ClN2O2 | DrugBank | [3957](https://pubchem.ncbi.nlm.nih.gov/compound/3957) | Salem_2010 |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| ka | kabs | 1.31 | 1/h | 1.31 hours(-1) | healthy white Jordanian males | : | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Salem_2010_reference](drugs/drug_loratadine/Loratadine_Salem2010_reference.md) |
| t½ | t1/2z | 3.65 | h | 3.65 hours | healthy white Jordanian males | : | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Salem_2010_reference](drugs/drug_loratadine/Loratadine_Salem2010_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Salem_2010_reference](drugs/drug_loratadine/Loratadine_Salem2010_reference.md) | — | 1-compartment (no model) | 4 | Salem II et al., A retrospective, open-label analysis of…, Clinical therapeutics (2010) | [10.1016/j.clinthera.2010.02.001](https://doi.org/10.1016/j.clinthera.2010.02.001) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=loratadine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` inhibitor/substrate | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` inhibitor/substrate | DrugBank actor |
| distribution | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| distribution | testis | `ABCB1` inhibitor/substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2B6` substrate, `CYP2C19` inhibitor/substrate, `CYP2C8` inhibitor/substrate, `CYP2C9` substrate, `CYP2D6` inhibitor/substrate, `CYP3A4` inhibitor/substrate, `CYP3A5` substrate, `UGT1A1` unknown, `UGT1A3` unknown, `UGT2B15` unknown | DrugBank actor |
| metabolism | lung | `CYP1A1` substrate | DrugBank actor |
| metabolism | small intestine | `CYP1A1` substrate, `CYP3A4` inhibitor/substrate, `CYP3A5` substrate, `UGT1A1` unknown | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| excretion | liver | `ABCB1` inhibitor/substrate, `ABCB11` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: HRH1 (target), KCNH2 (target), UGT2B10 (unknown).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:21 | 0:56 | 1/0/0 | 0/0/0 | 0/0/0 | 79,625/3,994 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Salem_2010.pdf` | Salem II et al., A retrospective, open-label analysis of…, Clinical therapeutics (2010) | popPK | 9 | [10.1016/j.clinthera.2010.02.001](https://doi.org/10.1016/j.clinthera.2010.02.001) | [20206796](https://pubmed.ncbi.nlm.nih.gov/20206796) | The paper reports quantitative non-compartmental population PK parameters for loratadine (ke, t1/2, ka, etc.) in healthy human volunteers, with values explicitly listed in the results section. |

<sub>queue written 2026-10-07T21:20:34.786859+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ali_2017 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of Punica granatum using rabbits, where loratadine is used only as a histamine H1 receptor antagonist comparator to probe mechanism of action, not as a subject of PK analysis. |
| popPK | Dos_2024 | irrelevant | 0 | 0 | The study is an ecotoxicological assessment of loratadine in bacteria, not a pharmacokinetic study of disposition parameters. |
| popPK | Faisal_2020 | irrelevant | 0 | 0 | This is a mechanistic in-vitro study of azithromycin's effects on smooth muscle, where loratadine is used merely as a non-specific antagonist; no loratadine pharmacokinetic parameters are reported. |
| popPK | Iesce_2019 | irrelevant | 0 | 0 | The study focuses on ecotoxicity in aquatic organisms and does not report pharmacokinetic disposition parameters for loratadine. |
| popPK | Krishna_2018 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of donepezil hydrochloride in rats, using loratadine only as an internal standard for HPLC analysis, not as the subject drug. |
| popPK | Peters_1990 | irrelevant | 0 | 0 | The study investigates the antimalarial activity of loratadine in vivo and in vitro, providing no pharmacokinetic parameters (CL, V, ka, etc.). |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 21:20 UTC</sub>
