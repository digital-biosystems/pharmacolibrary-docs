<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D06A&quot;,&quot;href&quot;:&quot;atc/D06A.md&quot;},{&quot;label&quot;:&quot;demeclocycline&quot;}]"></div>

# demeclocycline

- **generic name:** demeclocycline
- **ATC codes:** `D06AA01`, `J01AA01`
- **DrugBank:** [DB00618](https://go.drugbank.com/drugs/DB00618) · **PubChem:** [CID 54680690](https://pubchem.ncbi.nlm.nih.gov/compound/54680690)
- **molar mass:** 464.853 g/mol (C21H21ClN2O8) — DrugBank
- **groups:** approved

## About

Demeclocycline is a tetracycline antibiotic used for bacterial infections such as acne, gonorrhea, urinary tract infections, and also for the syndrome of inappropriate antidiuretic hormone secretion. It is an approved drug, used both topically for skin conditions and systemically as an antibacterial.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2736402](https://www.wikidata.org/wiki/Q2736402) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Omori_1999_colony_forming_efficiency](drugs/drug_demeclocycline/pd_Omori_1999_colony_forming_efficiency.md) | colony-forming efficiency ← demeclocycline · inhibition effect | — | Omori N et al., Quantitative comparison of cytocidal ef…, Journal of periodontal rese… (1999) | [10.1111/j.1600-0765.1999.tb02256.x](https://doi.org/10.1111/j.1600-0765.1999.tb02256.x) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Leung_2007_cell_death](drugs/drug_demeclocycline/pd_Leung_2007_cell_death.md) | cell death ← demeclocycline · inhibition effect | — | Leung DW et al., Minocycline protects photoreceptors fro…, Investigative ophthalmology… (2007) | [10.1167/iovs.06-0522](https://doi.org/10.1167/iovs.06-0522) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:05 | 2:43 | 0/0/0 | 1/1/0 | 0/0/0 | 23,580/4,713 | openai / gpt-6-luna | 2 | 0/0 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 22 matched, 18 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agwuh_2006 | irrelevant | 1 | 0 | This review mentions demeclocycline but reports no quantitative disposition parameters in the provided evidence. |
| popPK | Ballardie_1984 | irrelevant | 0 | 0 | This is a single-subject pharmacodynamic report and gives no quantitative demeclocycline disposition parameters. |
| popPK | Bokor-Bratić_2000 | irrelevant | 0 | 0 | This review reports no demeclocycline disposition parameters; the concentration data concern other tetracyclines. |
| popPK | Carrilho_1977 | irrelevant | 1 | 0 | The study reports renal-function changes after demeclocycline, not quantitative demeclocycline disposition parameters. |
| popPK | Cherrill_1975 | irrelevant | 0 | 0 | This human treatment study reports water-balance effects, not quantitative demeclocycline pharmacokinetic parameters. |
| popPK | Heim_1977 | irrelevant | 0 | 0 | Demeclocycline was used as treatment, with no quantitative pharmacokinetic parameters reported. |
| popPK | Kirkland_1983 | irrelevant | 0 | 0 | Demeclocycline is a therapeutic agent in a human case report, with no quantitative pharmacokinetic parameters reported. |
| popPK | Leung_2007 | irrelevant | 0 | 0 | This in-vitro study reports cytotoxicity and EC50 values, not demeclocycline pharmacokinetic parameters. |
| popPK | Miller_1980 | irrelevant | 1 | 0 | Plasma levels are correlated with nephrotoxicity, but no quantitative disposition parameters are reported. |
| popPK | Omori_1999 | irrelevant | 0 | 0 | This is an in-vitro cytotoxicity study and reports no pharmacokinetic disposition parameters. |
| popPK | SCRIABINE_1964 | irrelevant | 0 | 0 | no_text gate: only 111 chars of text extracted (&lt; 400) |
| popPK | Vantyghem_2011 | irrelevant | 0 | 0 | This is a clinical review that mentions demeclocycline as treatment but reports no pharmacokinetic parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
