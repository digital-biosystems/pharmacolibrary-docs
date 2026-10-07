<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;ribociclib&quot;}]"></div>

# ribociclib

- **generic name:** ribociclib
- **ATC codes:** `L01EF02`
- **DrugBank:** [DB11730](https://go.drugbank.com/drugs/DB11730) · **PubChem:** [CID 44631912](https://pubchem.ncbi.nlm.nih.gov/compound/44631912)
- **molar mass:** 434.548 g/mol (C23H30N8O) — DrugBank
- **groups:** approved, investigational

## About

Ribociclib is a protein kinase inhibitor used to treat breast cancer. It is an approved medicine, authorised in the European Union for breast cancer.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27088552](https://www.wikidata.org/wiki/Q27088552) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ribociclib | parent | 434.548 | C23H30N8O | DrugBank | [44631912](https://pubchem.ncbi.nlm.nih.gov/compound/44631912) | Damoiseaux_2022, Ji_2026, Patel_2019, Samant_2018 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 06:35 | 7:39 | 0/5/1 | 3/0/0 | 0/0/0 | 146,142/34,965 | openai / gpt-6-luna | 7 | 1/6 | 7/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Ji_2026_reference](drugs/drug_ribociclib/Ribociclib_Ji2026_reference.md) | — | 1-compartment (no model) | 1 | Ji Y et al., Quantitative Pharmacology Justifying Ri…, Clinical pharmacokinetics (2026) | [10.1007/s40262-026-01643-3](https://doi.org/10.1007/s40262-026-01643-3) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Damoiseaux_2022_reference](drugs/drug_ribociclib/Ribociclib_Damoiseaux2022_reference.md) | — | 1-compartment (no model) | 1 | Damoiseaux D et al., Predictiveness of the Human-CYP3A4-Tran…, Pharmaceuticals (Basel, Swi… (2022) | [10.3390/ph15070860](https://doi.org/10.3390/ph15070860) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Patel_2019_reference](drugs/drug_ribociclib/Ribociclib_Patel2019_reference.md) | — | 1-compartment (no model) | 1 | Patel YT et al., CNS penetration of the CDK4/6 inhibitor…, Cancer chemotherapy and pha… (2019) | [10.1007/s00280-019-03864-9](https://doi.org/10.1007/s00280-019-03864-9) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Samant_2018_fasted_state](drugs/drug_ribociclib/Ribociclib_Samant2018_fasted_state.md) | — | 1-compartment (no model) | 4 | Samant TS et al., Ribociclib Bioavailability Is Not Affec…, Clinical pharmacology and t… (2018) | [10.1002/cpt.940](https://doi.org/10.1002/cpt.940) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Samant_2018_fed_state](drugs/drug_ribociclib/Ribociclib_Samant2018_fed_state.md) | — | 1-compartment (no model) | 4 | Samant TS et al., Ribociclib Bioavailability Is Not Affec…, Clinical pharmacology and t… (2018) | [10.1002/cpt.940](https://doi.org/10.1002/cpt.940) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Samant_2018_geometric_mean_geometric_coefficient_of_variation](drugs/drug_ribociclib/Ribociclib_Samant2018_geometric_mean_geometric_coefficient_o.md) | — | 1-compartment (no model) | 4 | Samant TS et al., Ribociclib Bioavailability Is Not Affec…, Clinical pharmacology and t… (2018) | [10.1002/cpt.940](https://doi.org/10.1002/cpt.940) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Ji_2023_OS](drugs/drug_ribociclib/pd_Ji_2023_OS.md) | overall survival ← ribociclib · model not identified | — | Ji Y et al., Quantitative Assessment of Ribociclib E…, Journal of clinical pharmac… (2023) | [10.1002/jcph.2310](https://doi.org/10.1002/jcph.2310) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Ji_2023_PFS](drugs/drug_ribociclib/pd_Ji_2023_PFS.md) | progression-free survival ← ribociclib · model not identified | — | Ji Y et al., Quantitative Assessment of Ribociclib E…, Journal of clinical pharmac… (2023) | [10.1002/jcph.2310](https://doi.org/10.1002/jcph.2310) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Ji_2023_QT_interval_prolongation](drugs/drug_ribociclib/pd_Ji_2023_QT_interval_prolongation.md) | QT interval prolongation ← ribociclib · model not identified | — | Ji Y et al., Quantitative Assessment of Ribociclib E…, Journal of clinical pharmac… (2023) | [10.1002/jcph.2310](https://doi.org/10.1002/jcph.2310) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Ji_2023_neutropenia](drugs/drug_ribociclib/pd_Ji_2023_neutropenia.md) | neutropenia ← ribociclib · model not identified | — | Ji Y et al., Quantitative Assessment of Ribociclib E…, Journal of clinical pharmac… (2023) | [10.1002/jcph.2310](https://doi.org/10.1002/jcph.2310) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Ji_2023_time_to_response](drugs/drug_ribociclib/pd_Ji_2023_time_to_response.md) | time to response ← ribociclib · model not identified | — | Ji Y et al., Quantitative Assessment of Ribociclib E…, Journal of clinical pharmac… (2023) | [10.1002/jcph.2310](https://doi.org/10.1002/jcph.2310) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Lu_2021_ANC](drugs/drug_ribociclib/pd_Lu_2021_ANC.md) | absolute neutrophil count ← ribociclib · model not identified | — | Lu Y et al., Ribociclib Population Pharmacokinetics…, Journal of clinical pharmac… (2021) | [10.1002/jcph.1856](https://doi.org/10.1002/jcph.1856) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Zhang_2022_ATPase_activity](drugs/drug_ribociclib/pd_Zhang_2022_ATPase_activity.md) | P-gp transporter ATPase activity ← ribociclib · stimulation effect | — | Zhang L et al., Ribociclib Inhibits P-gp-Mediated Multi…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.867128](https://doi.org/10.3389/fphar.2022.867128) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ribociclib) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP3A4` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CDK4 (inhibitor), CDK4 (target), CDK6 (inhibitor), CDK6 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 13 matched, 13 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 6  ·  extracted 0  ·  needs_review 1  ·  rejected 5  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lu_2021.pdf` | Lu Y et al., Ribociclib Population Pharmacokinetics…, Journal of clinical pharmac… (2021) | popPK | 10 | [10.1002/jcph.1856](https://doi.org/10.1002/jcph.1856) | [33713359](https://pubmed.ncbi.nlm.nih.gov/33713359) | Human ribociclib population-PK modeling is reported, but no numeric disposition parameter values are included in the evidence. |
| `Patel_2019.pdf` | Patel YT et al., CNS penetration of the CDK4/6 inhibitor…, Cancer chemotherapy and pha… (2019) | popPK | 9 | [10.1007/s00280-019-03864-9](https://doi.org/10.1007/s00280-019-03864-9) | [31079218](https://pubmed.ncbi.nlm.nih.gov/31079218) | Mouse ribociclib PK is modeled and numeric Kp,uu values are reported, though compartmental parameter estimates are absent. |

<sub>queue written 2026-10-07T06:29:05.194517+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | André_2025 | irrelevant | 0 | 0 | This is a human ctDNA resistance-biomarker analysis and reports no ribociclib pharmacokinetic parameters. |
| popPK | Cohen_2025 | irrelevant | 1 | 0 | This is an ECG monitoring study, not a ribociclib pharmacokinetic study; the cited half-life is background information. |
| popPK | Deb_2023 | irrelevant | 1 | 0 | Ribociclib is only included in an in-silico DDI analysis, with no quantitative disposition parameters reported. |
| popPK | Ji_2023 | irrelevant | 2 | 0 | The evidence describes exposure-response analyses but reports no quantitative ribociclib disposition parameters. |
| popPK | Lu_2021 | relevant | 10 | 0 | Human ribociclib population-PK modeling is reported, but no numeric disposition parameter values are included in the evidence. |
| popPK | Roncato_2022 | irrelevant | 1 | 1 | The human case series reports ribociclib concentrations but no quantitative disposition parameters or PK model. |
| popPK | Sorf_2018 | irrelevant | 0 | 0 | This is an in-vitro transporter and enzyme interaction study with no quantitative ribociclib disposition parameters. |
| popPK | Zhang_2022 | irrelevant | 0 | 0 | This is an in vitro transporter study and reports no quantitative ribociclib disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 06:29 UTC</sub>
