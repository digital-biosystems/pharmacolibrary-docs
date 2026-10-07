<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01M&quot;,&quot;href&quot;:&quot;atc/J01M.md&quot;},{&quot;label&quot;:&quot;nalidixic acid&quot;}]"></div>

# nalidixic acid

- **generic name:** nalidixic acid
- **ATC codes:** `J01MB02`
- **DrugBank:** [DB00779](https://go.drugbank.com/drugs/DB00779) · **PubChem:** [CID 4421](https://pubchem.ncbi.nlm.nih.gov/compound/4421)
- **molar mass:** 232.2353 g/mol (C12H12N2O3) — DrugBank
- **groups:** approved, withdrawn

## About

Nalidixic acid is a quinolone antibiotic that was used to treat urinary tract infections, including those caused by Escherichia coli. It has been withdrawn from use, so it is no longer available for treating patients.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q281082](https://www.wikidata.org/wiki/Q281082) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 12:36 | 0:46 | 0/0/0 | 0/0/2 | 0/0/0 | 56,274/2,085 | einfracz / qwen3.8-27b | 16 | 2/2 | 4/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Srivastava_2020_M_tuberculosis_kill](drugs/drug_nalidixic_acid/pd_Srivastava_2020_M_tuberculosis_kill.md) | M. tuberculosis kill ← nalidixic acid · direct sigmoid Emax (Hill) effect | — | Srivastava S et al., Effect of specimen processing, growth s…, PloS one (2020) | [10.1371/journal.pone.0230927](https://doi.org/10.1371/journal.pone.0230927) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Suominen_2020_GI](drugs/drug_nalidixic_acid/pd_Suominen_2020_GI.md) | growth inhibition biomarker turnover ← nalidixic acid | — | Suominen EN et al., Investigating the short- and long-term…, Heliyon (2020) | [10.1016/j.heliyon.2020.e04232](https://doi.org/10.1016/j.heliyon.2020.e04232) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Suominen_2020_LI](drugs/drug_nalidixic_acid/pd_Suominen_2020_LI.md) | luminescence inhibition biomarker turnover ← nalidixic acid | — | Suominen EN et al., Investigating the short- and long-term…, Heliyon (2020) | [10.1016/j.heliyon.2020.e04232](https://doi.org/10.1016/j.heliyon.2020.e04232) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=nalidixic_acid) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP1A2` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC22A6` inhibitor | DrugBank actor |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: Aerobic bacterial DNA (inhibitor), TDO2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Deza-Cruz_2023 | irrelevant | 0 | 0 | The paper reports antimicrobial resistance data for E. coli in pigs and does not contain any pharmacokinetic parameters for nalidixic acid. |
| popPK | Dodd_1989 | irrelevant | 0 | 0 | This is an in-vitro neurochemical study investigating receptor binding and neurotransmitter effects, not a pharmacokinetic study of nalidixic acid. |
| popPK | Kaniwa_1984 | irrelevant | 0 | 0 | The provided text is software metadata (GROBID) and contains no scientific content, pharmacokinetic data, or drug information. |
| popPK | MacKinnon_2018 | irrelevant | 0 | 0 | The study analyzes antimicrobial resistance (MIC) data for E. coli isolates, not pharmacokinetic parameters of nalidixic acid. |
| popPK | Murata_1989 | irrelevant | 3 | 0 | The paper focuses on the development of computer programs and only qualitatively discusses nalidixic acid in the context of multi-fraction absorption without providing specific numeric PK parameters in the evidence. |
| popPK | Park_2014 | irrelevant | 0 | 0 | The study is an in vitro/in vivo efficacy assay against a parasite, not a pharmacokinetic study of nalidixic acid. |
| popPK | Sakal_2000 | irrelevant | 0 | 0 | Nalidixic acid is used only as an induction agent for protein expression in E. coli; no pharmacokinetic parameters are reported. |
| popPK | Squires_1993 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of GABA-A receptor binding interactions, and nalidixic acid is only a comparator antibacterial agent with no pharmacokinetic parameters reported. |
| popPK | Srivastava_2020 | irrelevant | 0 | 0 | The study is an in-vitro microbiology investigation of Mycobacterium tuberculosis diagnosis and nalidixic acid's antimicrobial efficacy, not a pharmacokinetic study. |
| popPK | Suominen_2020 | irrelevant | 0 | 0 | The paper reports in-vitro antibacterial toxicity (EC50) of nalidixic acid against E. coli, not pharmacokinetic disposition parameters (CL, V, ka) for the drug itself. |
| popPK | Talwar_2008 | irrelevant | 0 | 0 | The paper describes a polyherbal microbicide's in-vitro antimicrobial activity, with nalidixic acid mentioned only as a reference for bacterial resistance, and contains no pharmacokinetic data. |
| popPK | Wythe_2022 | irrelevant | 0 | 0 | The study is a food safety analysis of antimicrobial treatments on chicken thighs, using nalidixic acid only as a marker for antibiotic resistance in Salmonella, not as a subject for pharmacokinetic study. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
