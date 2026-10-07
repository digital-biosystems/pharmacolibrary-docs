<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R06A&quot;,&quot;href&quot;:&quot;atc/R06A.md&quot;},{&quot;label&quot;:&quot;alimemazine&quot;}]"></div>

# alimemazine

- **generic name:** alimemazine
- **ATC codes:** `R06AD01`
- **DrugBank:** [DB01246](https://go.drugbank.com/drugs/DB01246) · **PubChem:** [CID 5574](https://pubchem.ncbi.nlm.nih.gov/compound/5574)
- **molar mass:** 298.446 g/mol (C18H22N2S) — DrugBank
- **groups:** approved, vet_approved

## About

Alimemazine (trimeprazine) is an antihistamine of the phenothiazine class used to treat allergic skin conditions such as urticaria, atopic dermatitis and contact dermatitis, and to relieve itching. It is an approved medicine and is also approved for veterinary use, but it is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2623251](https://www.wikidata.org/wiki/Q2623251) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:34 | 0:58 | 0/0/0 | 0/0/0 | 0/0/0 | 36,854/859 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=alimemazine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: HRH1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Sponheim_1990.pdf` | Sponheim S et al., Pharmacokinetics of trimeprazine in chi…, Pharmacology & toxicology (1990) | popPK | 9 | [10.1111/j.1600-0773.1990.tb00821.x](https://doi.org/10.1111/j.1600-0773.1990.tb00821.x) | [2255680](https://pubmed.ncbi.nlm.nih.gov/2255680) | The study reports quantitative pharmacokinetic parameters (half-life, clearance, AUC) for alimemazine in children. |

<sub>queue written 2026-10-07T22:34:08.327813+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Antao_2005 | irrelevant | 0 | 0 | The study is a clinical trial assessing the efficacy of alimemazine for retching and does not report any pharmacokinetic parameters. |
| popPK | Fort_2026 | irrelevant | 0 | 0 | The paper is a forensic hair drug analysis compendium reporting qualitative detection and hair concentrations, not a pharmacokinetic study with disposition parameters (CL, V, etc.) for alimemazine. |
| popPK | Hilberg_1999 | irrelevant | 1 | 0 | The study investigates postmortem redistribution in rats and reports concentration ratios rather than quantitative pharmacokinetic parameters (CL, V, ka) for alimemazine. |
| popPK | Pin_2026 | irrelevant | 0 | 0 | This is a clinical consensus guideline for insomnia treatment in children with ASD, not a pharmacokinetic study, and contains no quantitative PK parameters for alimemazine. |
| popPK | Vybornykh_2023 | irrelevant | 0 | 0 | The paper is a clinical safety review of psychotropic drugs in hematological patients and does not report any pharmacokinetic parameters for alimemazine. |
| popPK | van_2002 | irrelevant | 0 | 0 | The paper is a clinical case report of neuroleptic malignant syndrome and does not report any pharmacokinetic parameters for alimemazine. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
