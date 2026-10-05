<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07A&quot;,&quot;href&quot;:&quot;atc/A07A.md&quot;},{&quot;label&quot;:&quot;colistin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Colistin_Ma2026_reference&quot;,&quot;label&quot;:&quot;Ma_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_colistin/Colistin_Ma2026_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# colistin

- **generic name:** colistin
- **ATC codes:** `A07AA10`, `J01XB01`
- **DrugBank:** [DB00803](https://go.drugbank.com/drugs/DB00803) · **PubChem:** [CID 131704173](https://pubchem.ncbi.nlm.nih.gov/compound/131704173)
- **groups:** approved, investigational

## About

Colistin is a polymyxin antibiotic used to treat serious infections caused by resistant Gram-negative bacteria, and also as an intestinal antiinfective for gut decontamination. It remains in clinical use but is generally reserved for hospital treatment of multidrug-resistant infections when other antibiotics are not suitable.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q418946](https://www.wikidata.org/wiki/Q418946) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| colistin | parent | 1155.45 | C52H98N16O13 | PubChem | [131704173](https://pubchem.ncbi.nlm.nih.gov/compound/131704173) | Ma_2026, Xie_2022, Yu_2022 |
| colistin sulfate | metabolite | 1253.53 | C52H100N16O17S | PubChem | [91885449](https://pubchem.ncbi.nlm.nih.gov/compound/91885449) | Ma_2026, Xie_2022, Yu_2022 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 17:51 | 7:21 | 1/2/1 | 0/0/0 | 0/0/0 | 98,042/26,013 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.2). The first reading is what the record holds.">cross-check: disputed</span> | [Ma_2026_reference](drugs/drug_colistin/Colistin_Ma2026_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Ma Y et al., Optimizing Colistin Sulfate Dosing in S…, Drug design, development an… (2026) | [10.2147/DDDT.S600942](https://doi.org/10.2147/DDDT.S600942) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.2). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C2_reference failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Yu_2022_reference](drugs/drug_colistin/Colistin_Yu2022_reference.md) | — | 1-compartment (no model) | 1 (+1 cov.) | Yu XB et al., Population Pharmacokinetics of Colistin…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.915958](https://doi.org/10.3389/fphar.2022.915958) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Boonyasiri_2025_reference](drugs/drug_colistin/Colistin_Boonyasiri2025_reference.md) | — | 1-compartment (no model) | 0 | Boonyasiri A et al., Disposition of colistin in critically-i…, Clinical microbiology and i… (2025) | [10.1016/j.cmi.2025.05.021](https://doi.org/10.1016/j.cmi.2025.05.021) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Xie_2022_reference](drugs/drug_colistin/Colistin_Xie2022_reference.md) | — | 2-compartment (no model) | 3 | Xie YL et al., Population pharmacokinetics of intraven…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.967412](https://doi.org/10.3389/fphar.2022.967412) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=colistin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 142 matched, 20 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 1  ·  needs_review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Boonyasiri_2025.pdf` | Boonyasiri A et al., Disposition of colistin in critically-i…, Clinical microbiology and i… (2025) | popPK | 10 | [10.1016/j.cmi.2025.05.021](https://doi.org/10.1016/j.cmi.2025.05.021) | [40449589](https://pubmed.ncbi.nlm.nih.gov/40449589) | The study reports quantitative population pharmacokinetic parameters (clearance, volume of distribution) for colistin in humans, with all numeric values explicitly stated in the abstract. |
| `Lee_2013.pdf` | Lee J et al., Population pharmacokinetic analysis of…, Antimicrobial agents and ch… (2013) | popPK | 10 | [10.1128/AAC.00271-13](https://doi.org/10.1128/AAC.00271-13) | [23439640](https://pubmed.ncbi.nlm.nih.gov/23439640) | The study is a population PK analysis of colistin in humans, but the specific numeric parameter values (CL, V, etc.) are not listed in the provided text, only the half-life is mentioned. |
| `Ma_2026.pdf` | Ma Y et al., Optimizing Colistin Sulfate Dosing in S…, Drug design, development an… (2026) | popPK | 10 | [10.2147/DDDT.S600942](https://doi.org/10.2147/DDDT.S600942) | [42325914](https://pubmed.ncbi.nlm.nih.gov/42325914) | The study reports a population pharmacokinetic model for colistin sulfate in humans with explicit numeric values for clearance (1.66 L/h) and volume of distribution (10.10 L) in the abstract. |
| `Sun_2025.pdf` | Sun Q et al., Population pharmacokinetics of colistin…, Scientific reports (2025) | popPK | 10 | [10.1038/s41598-025-03503-9](https://doi.org/10.1038/s41598-025-03503-9) | [40419663](https://pubmed.ncbi.nlm.nih.gov/40419663) | The paper describes a population PK model for colistin sulfate in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |

<sub>queue written 2026-10-04T17:45:06.310472+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Gontijo_2021 | irrelevant | 2 | 0 | The paper describes an optimal control method for dosage selection using a PK model but does not report specific quantitative PK parameter values (CL, V, etc.) for colistin in the provided evidence. |
| popPK | Lee_2013 | relevant | 10 | 2 | The study is a population PK analysis of colistin in humans, but the specific numeric parameter values (CL, V, etc.) are not listed in the provided text, only the half-life is mentioned. |
| popPK | Sun_2025 | relevant | 10 | 0 | The paper describes a population PK model for colistin sulfate in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Zabidi_2021 | irrelevant | 2 | 0 | This is a systematic review that discusses discrepancies in PK parameters but does not provide original quantitative values or a specific population PK model in the provided evidence. |
| popPK | Zamri_2025 | irrelevant | 2 | 3 | This is a systematic review summarizing ranges from other studies rather than reporting original quantitative PK parameters or a specific population PK model for colistin. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-04 17:45 UTC</sub>
