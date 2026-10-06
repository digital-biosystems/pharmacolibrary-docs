<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05C&quot;,&quot;href&quot;:&quot;atc/N05C.md&quot;},{&quot;label&quot;:&quot;bromides&quot;}]"></div>

# bromides

- **generic name:** bromides
- **ATC codes:** `N05CM11`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Bromides were once used as sedatives and hypnotics to calm patients and treat nervous disorders. They are no longer used in human medicine because long-term use caused bromism, a toxic build-up leading to neurological and skin problems.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q422423](https://www.wikidata.org/wiki/Q422423) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 19:43 | 0:33 | 0/0/0 | 0/1/0 | 0/0/0 | 60,962/1,920 | ollama / glm-5.3-flash | 2 | 0/2 | 2/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Fojtášková_2020_EC50_Vibrio_fischeri](drugs/drug_bromides/pd_Fojt_kov_2020_EC50_Vibrio_fischeri.md) | Luminescence inhibition of Vibrio fischeri (acute toxicity) ← bromide ionic liquids ([C4MIM][Br], [N2224][Br], [N2228][Br], [N222,12][Br]) · inhibition effect | — | Fojtášková J et al., Antibacterial, Antifungal and Ecotoxic…, Molecules (Basel, Switzerla… (2020) | [10.3390/molecules25215181](https://doi.org/10.3390/molecules25215181) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Fojtášková_2020_Inhibition](drugs/drug_bromides/pd_Fojt_kov_2020_Inhibition.md) | Inhibition of Bacillus subtilis growth ← [N222,12][Br] (dodecyltriethylammonium bromide) · direct sigmoid Emax (Hill) effect | — | Fojtášková J et al., Antibacterial, Antifungal and Ecotoxic…, Molecules (Basel, Switzerla… (2020) | [10.3390/molecules25215181](https://doi.org/10.3390/molecules25215181) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Biczak_2020 | irrelevant | 0 | 0 | This is a plant phytotoxicity/ecotoxicology study of ionic liquid bromides in cucumber seedlings, with no pharmacokinetic disposition parameters (CL, V, half-life, PK model) for bromides. |
| popPK | Fojtášková_2020 | irrelevant | 0 | 0 | This is a chemistry/ecotoxicity study of ionic liquid synthesis; "bromides" are only counterions/precursors, with no pharmacokinetic parameters for bromide as a drug. |
| popPK | Hou_2016 | irrelevant | 0 | 0 | This is a medicinal chemistry/SAR paper on antifungal β-carboline salts; "bromides" refers only to counterions, with no pharmacokinetic parameters reported. |
| popPK | Nordeman_2012 | irrelevant | 0 | 0 | This is a synthetic chemistry paper about aryl bromides as substrates, not pharmacokinetics of the drug bromide. |
| popPK | Novikov_2010 | irrelevant | 0 | 0 | This is a chemistry/antiviral synthesis paper; "bromides" appear only as synthetic reagents, with no pharmacokinetic parameters for bromide as a drug. |
| popPK | Rastegari_2009 | irrelevant | 0 | 0 | This is an in-vitro surfactant–enzyme binding study; alkyl trimethyl ammonium bromides are surfactants, not the drug bromide, and no PK parameters exist. |
| popPK | Yang_2015 | irrelevant | 0 | 0 | This is a synthetic chemistry/antifungal SAR study; "bromides" refers to chemical salt forms, not the drug bromide, and no PK parameters are reported. |
| popPK | el-Sabbagh_2009 | irrelevant | 0 | 0 | This is a chemistry/antiviral synthesis paper; "bromides" refers only to reagents (phenacyl bromides), with no pharmacokinetic data. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
