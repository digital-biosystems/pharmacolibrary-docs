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

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:05 | 2:43 | 0/0/0 | 1/1/0 | 0/0/0 | 23,580/4,713 | openai / gpt-6-luna | 2 | 0/0 | 2/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Omori_1999_colony_forming_efficiency](drugs/drug_demeclocycline/pd_Omori_1999_colony_forming_efficiency.md) | colony-forming efficiency ← demeclocycline · inhibition effect | — | Omori N et al., Quantitative comparison of cytocidal ef…, Journal of periodontal rese… (1999) | [10.1111/j.1600-0765.1999.tb02256.x](https://doi.org/10.1111/j.1600-0765.1999.tb02256.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Leung_2007_cell_death](drugs/drug_demeclocycline/pd_Leung_2007_cell_death.md) | cell death ← demeclocycline · inhibition effect | — | Leung DW et al., Minocycline protects photoreceptors fro…, Investigative ophthalmology… (2007) | [10.1167/iovs.06-0522](https://doi.org/10.1167/iovs.06-0522) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=demeclocycline) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: 30S ribosomal protein (inhibitor), AVPR2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

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

---
<sub>Generated by `docs.py` (scholarv2)</sub>
