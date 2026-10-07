<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D08A&quot;,&quot;href&quot;:&quot;atc/D08A.md&quot;},{&quot;label&quot;:&quot;thiomersal&quot;}]"></div>

# thiomersal

- **generic name:** thiomersal
- **ATC codes:** `D08AK06`
- **DrugBank:** [DB11590](https://go.drugbank.com/drugs/DB11590) · **PubChem:** [CID 16684434](https://pubchem.ncbi.nlm.nih.gov/compound/16684434)
- **molar mass:** 404.81 g/mol (C9H9HgNaO2S) — DrugBank
- **groups:** approved

## About

Thiomersal is an organomercury compound used as an antiseptic and antifungal agent, and also serves as an excipient, for example as a preservative in some medicines and vaccines. It remains an approved drug, classified among mercurial antiseptics and disinfectants for dermatological use, though its use today is limited mainly to such preservative and antiseptic roles.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q411046](https://www.wikidata.org/wiki/Q411046) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:59 | 1:44 | 0/0/0 | 0/0/0 | 0/0/0 | 61,186/1,134 | einfracz / qwen3.8-27b | 4 | 0/4 | 4/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=thiomersal) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` unknown | DrugBank actor |
| excretion | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: FXYD2 (target), GPX1 (target), GSR (inducer), ITPR1 (unknown), MTR (target), SLC7A11 (target), SOD2 (inducer).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 19 matched, 17 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Gatchalian_2010 | irrelevant | 0 | 0 | The study focuses on vaccine immunogenicity and safety, with thiomersal serving only as a formulation component/comparator, and reports no pharmacokinetic parameters. |
| popPK | Gloriani_2010 | irrelevant | 0 | 0 | The study evaluates the immunogenicity of a hepatitis B vaccine containing thiomersal, not the pharmacokinetic disposition parameters of thiomersal itself. |
| popPK | Grotto_2009 | irrelevant | 0 | 0 | The paper is a review of vaccine safety and immunogenicity where thiomersal is mentioned only as an adjuvant/safety topic, not as a subject of pharmacokinetic analysis. |
| popPK | Harmsen_2011 | irrelevant | 0 | 0 | The study investigates the effect of thiomersal on viral particle dissociation in vaccines, not the pharmacokinetic parameters of thiomersal itself. |
| popPK | Heron_2007 | irrelevant | 0 | 0 | The study is an immunogenicity and safety trial for a hepatitis B vaccine where thiomersal is only mentioned as a preservative status descriptor, containing no pharmacokinetic data. |
| popPK | Herzog_2009 | irrelevant | 0 | 0 | The paper is a review of an influenza vaccine and only mentions thiomersal to state that the vaccine does not contain it; it provides no pharmacokinetic data. |
| popPK | Hieu_2015 | irrelevant | 0 | 0 | The study evaluates the safety and immunogenicity of vaccines with or without thiomersal as a preservative, containing no pharmacokinetic data for thiomersal. |
| popPK | Jain_2003 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effect of thiomersal on histamine H1 receptor binding and signaling, not its pharmacokinetic disposition parameters. |
| popPK | Li_2025 | irrelevant | 0 | 0 | The study evaluates the safety and immunogenicity of a thiomersal-free vaccine, with thiomersal serving only as a comparator excipient rather than the subject drug for pharmacokinetic analysis. |
| popPK | Ojeda_2020 | irrelevant | 0 | 0 | The paper is a clinical trial evaluating the immunogenicity and safety of an influenza vaccine containing thiomersal as a preservative, not a pharmacokinetic study of thiomersal itself. |
| popPK | Rebedea_2006 | irrelevant | 0 | 0 | The study evaluates the immunogenicity and safety of vaccines containing thiomersal as an excipient, not the pharmacokinetics of thiomersal itself. |
| popPK | Rouaz_2021 | irrelevant | 0 | 0 | The paper is a review of excipients in pediatric formulations and does not report pharmacokinetic parameters for thiomersal. |
| popPK | Saadh_2020 | irrelevant | 0 | 0 | The paper is a vaccine production and immunogenicity study where thiomersal is listed only as a preservative ingredient, with no pharmacokinetic parameters reported for it. |
| popPK | Saadh_2022 | irrelevant | 0 | 0 | The paper is a vaccine immunogenicity study where thiomersal is listed only as a minor excipient in the formulation, with no pharmacokinetic data reported. |
| popPK | Yang_2012 | irrelevant | 0 | 0 | The study evaluates the immunogenicity of an H5N1 vaccine, with thiomersal used only as a comparator manufacturing process, and reports no pharmacokinetic parameters for thiomersal. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
