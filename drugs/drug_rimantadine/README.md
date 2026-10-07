<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;rimantadine&quot;}]"></div>

# rimantadine

- **generic name:** rimantadine
- **ATC codes:** `J05AC02`
- **DrugBank:** [DB00478](https://go.drugbank.com/drugs/DB00478) · **PubChem:** [CID 5071](https://pubchem.ncbi.nlm.nih.gov/compound/5071)
- **molar mass:** 179.3018 g/mol (C12H21N) — DrugBank
- **groups:** approved

## About

Rimantadine is an antiviral drug used to treat influenza A infection. It is an approved antiviral for systemic use, though it is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q42171](https://www.wikidata.org/wiki/Q42171) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:01 | 0:39 | 0/0/0 | 1/0/0 | 0/0/0 | 44,434/1,443 | ollama / glm-5.3-flash | 4 | 2/0 | 4/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Kobe_2026_MHV_infectivity_plaque_reduction_post_treatment](drugs/drug_rimantadine/pd_Kobe_2026_MHV_infectivity_plaque_reduction_post_treatment.md) | MHV infectivity (plaque reduction, post-treatment) ← rimantadine · direct sigmoid Emax (Hill) effect | — | Kobe N et al., In silico characterisation of a novel S…, Bioorganic chemistry (2026) | [10.1016/j.bioorg.2026.109949](https://doi.org/10.1016/j.bioorg.2026.109949) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=rimantadine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 57 matched, 49 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Brooks_2012 | irrelevant | 0 | 0 | This is an in-vitro antiviral efficacy study of arbidol; rimantadine appears only as a comparator EC50 value, with no PK parameters. |
| popPK | Burlington_1982 | irrelevant | 1 | 0 | In-vitro antiviral activity study in ferret tracheal organ cultures with no PK disposition parameters for rimantadine. |
| popPK | Dong_2025 | irrelevant | 0 | 0 | Medicinal chemistry study of new adamantane derivatives; rimantadine only mentioned as discontinued comparator, no PK parameters. |
| popPK | Hu_2017 | irrelevant | 0 | 0 | This is an antiviral efficacy study of a spiroadamantane analog, not rimantadine PK; no disposition parameters are reported. |
| popPK | Jacob_2016 | irrelevant | 0 | 0 | This is a virology study of amantadine resistance in H5N1 viruses with no pharmacokinetic parameters for rimantadine. |
| popPK | Jefferson_2014 | irrelevant | 0 | 0 | This is a Cochrane efficacy review of neuraminidase inhibitors (oseltamivir, zanamivir) with no rimantadine PK parameters reported. |
| popPK | Kamal_2015 | irrelevant | 0 | 0 | This is an oseltamivir drug-disease model; rimantadine is not the subject drug and no rimantadine PK parameters appear. |
| popPK | Kang_2015 | irrelevant | 0 | 0 | Chemistry/antiviral activity study; rimantadine only appears as a comparator with EC50 values, no PK parameters. |
| popPK | Kobe_2026 | irrelevant | 0 | 0 | In vitro antiviral/drug-discovery study of SARS-CoV-2 E protein inhibitors; rimantadine is only a comparator with EC50/CC50 values, no PK disposition parameters. |
| popPK | Korshin_2013 | irrelevant | 0 | 0 | Rimantadine is only a potency comparator; no PK parameters reported. |
| popPK | Leneva_2000 | irrelevant | 0 | 0 | This is an efficacy study of oseltamivir in mice; rimantadine is only a co-administered comparator with no PK parameters reported. |
| popPK | Risner_2020 | irrelevant | 0 | 0 | Rimantadine is only one of many screened compounds in an in-vitro SARS-CoV-2 antiviral assay; no PK disposition parameters for rimantadine are reported. |
| popPK | Savinova_2009 | irrelevant | 0 | 0 | In-vitro antiviral efficacy study with EC50 values only; no PK disposition parameters for rimantadine. |
| popPK | Smee_2002 | irrelevant | 0 | 0 | In vitro antiviral assay methods study; rimantadine only tested for EC50/IC50 cytotoxicity, no PK parameters. |
| popPK | Sugaya_2012 | irrelevant | 0 | 0 | This is a population PK study of peramivir, not rimantadine; no rimantadine parameters are reported. |
| popPK | Thomaston_2021 | irrelevant | 0 | 0 | Structural/biophysical study of rimantadine binding to the M2 channel; no pharmacokinetic disposition parameters reported. |
| popPK | Wagaman_2002 | irrelevant | 0 | 0 | This is an in vitro antiviral assay development paper; rimantadine appears only as an EC50 comparator, with no PK parameters. |
| popPK | Zarubaev_2015 | irrelevant | 0 | 0 | Rimantadine is only mentioned as a comparator for resistance testing; no PK parameters for it are reported. |
| popPK | Zhan_2012 | irrelevant | 0 | 0 | Medicinal chemistry/antiviral activity study; rimantadine only appears as a comparator, with no PK parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
