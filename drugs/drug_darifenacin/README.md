<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G04B&quot;,&quot;href&quot;:&quot;atc/G04B.md&quot;},{&quot;label&quot;:&quot;darifenacin&quot;}]"></div>

# darifenacin

- **generic name:** darifenacin
- **ATC codes:** `G04BD10`
- **DrugBank:** [DB00496](https://go.drugbank.com/drugs/DB00496) · **PubChem:** [CID 444031](https://pubchem.ncbi.nlm.nih.gov/compound/444031)
- **molar mass:** 426.55 g/mol (C28H30N2O2) — DrugBank
- **groups:** approved, investigational

## About

Darifenacin is a muscarinic antagonist used to treat urinary frequency and incontinence, such as in overactive bladder. It is an approved drug, though it does not appear to be authorised centrally in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q166476](https://www.wikidata.org/wiki/Q166476) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| darifenacin | parent | 426.55 | C28H30N2O2 | DrugBank | [444031](https://pubchem.ncbi.nlm.nih.gov/compound/444031) | Kerbusch_2003 |
| hydroxylated metabolite | metabolite | 442.559 | C28H30N2O3 | PubChem | [54085540](https://pubchem.ncbi.nlm.nih.gov/compound/54085540) | Kerbusch_2003 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Kerbusch_2003_reference](drugs/drug_darifenacin/Darifenacin_Kerbusch2003_reference.md) | — | parent + metabolite (no model) | 4 (+1 cov.) | Kerbusch T et al., Population pharmacokinetic modelling of…, British journal of clinical… (2003) | [10.1046/j.1365-2125.2003.01967.x](https://doi.org/10.1046/j.1365-2125.2003.01967.x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Kerbusch_2004_SF](drugs/drug_darifenacin/pd_Kerbusch_2004_SF.md) | salivary flow ← active moiety (darifenacin and hydroxylated metabolite) · target-mediated drug disposition | — | Kerbusch T et al., Assessment of the relative in vivo pote…, British journal of clinical… (2004) | [10.1046/j.1365-2125.2003.01988.x](https://doi.org/10.1046/j.1365-2125.2003.01988.x) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:18 | 3:06 | 0/1/0 | 1/0/0 | 0/0/0 | 78,615/8,259 | einfracz / qwen3.8-27b | 2 | 2/0 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Choppin_1998 | irrelevant | 0 | 0 | The study is a pharmacological receptor characterization (pKB values) in rabbit tissue, not a pharmacokinetic study reporting disposition parameters for darifenacin. |
| popPK | Choppin_2001 | irrelevant | 0 | 0 | The study is an in vitro pharmacological receptor binding/functional assay in mouse bladder tissue, not a pharmacokinetic study measuring disposition parameters like clearance or volume. |
| popPK | Choppin_2001_2 | irrelevant | 0 | 0 | This is a pharmacological receptor binding/functional study in dogs, not a pharmacokinetic study reporting disposition parameters for darifenacin. |
| popPK | Kerbusch_2004 | irrelevant | 3 | 1 | The study uses a pre-existing population PK model to estimate pharmacodynamic potency and does not report numeric PK parameter estimates (CL, V, etc.) for darifenacin in the provided text. |
| popPK | Kurjak_1999 | irrelevant | 0 | 0 | This is an in vitro receptor binding and pharmacological study, not a pharmacokinetic study reporting disposition parameters for darifenacin. |
| popPK | Schneider_2005 | irrelevant | 0 | 0 | The study is an in vitro pharmacological investigation of bladder contractility and receptor binding in rats, not a pharmacokinetic study reporting disposition parameters for darifenacin. |
| popPK | Unno_2003 | irrelevant | 0 | 0 | This is a receptor pharmacology study in guinea-pig ileum using darifenacin as an antagonist, not a pharmacokinetic study. |
| popPK | Yuan_2011 | irrelevant | 0 | 0 | Darifenacin is used as a pharmacological antagonist in an in-vitro mechanistic study of rat ileum contractions, not as a subject drug for PK analysis. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 09:17 UTC</sub>
