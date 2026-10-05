<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B03A&quot;,&quot;href&quot;:&quot;atc/B03A.md&quot;},{&quot;label&quot;:&quot;saccharated iron oxide&quot;}]"></div>

# saccharated iron oxide

- **generic name:** saccharated iron oxide
- **ATC codes:** `B03AB02`
- **DrugBank:** [DB09146](https://go.drugbank.com/drugs/DB09146) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Iron sucrose is an intravenous iron preparation used to treat iron deficiency anemia. It is an approved medicine and remains in use as a hematinic for anemia.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27888379](https://www.wikidata.org/wiki/Q27888379) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 20:36 | 3:13 | 0/0/0 | 0/1/0 | 0/0/0 | 123,069/3,210 | ollama / qwen3.8:27b-mtp-q8_0 | 11 | 1/12 | 11/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Cao_2025_ferritin](drugs/drug_saccharated_iron_oxide/pd_Cao_2025_ferritin.md) | serum ferritin ← iron · indirect response — drug stimulates the production of serum ferritin | — | Cao K et al., Computational Prediction of Tissue Iron…, International journal of na… (2025) | [10.2147/ijn.s534063](https://doi.org/10.2147/ijn.s534063) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=saccharated_iron_oxide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 27 matched, 46 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Beshara_1999.pdf` | Beshara S et al., Kinetic analysis of 52Fe-labelled iron(…, British journal of haematol… (1999) | popPK | 9 | [10.1046/j.1365-2141.1999.01170.x](https://doi.org/10.1046/j.1365-2141.1999.01170.x) | [10050710](https://pubmed.ncbi.nlm.nih.gov/10050710) | The study reports a three-compartment PK model for saccharated iron oxide (Venofer) in minipigs, but specific numeric parameter values (CL, V, Q, ka) are not explicitly listed in the provided text. |

<sub>queue written 2026-10-05T20:36:11.832122+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adham_2015 | irrelevant | 0 | 0 | The study is a toxicology/toxicokinetic assessment of iron overload in rats, reporting tissue iron burden and physiological markers, but it does not report pharmacokinetic parameters (CL, V, ka, t1/2) for saccharated iron oxide. |
| popPK | Auerbach_2018 | irrelevant | 2 | 0 | The paper is a review of ferumoxytol (a different drug) and does not report quantitative PK parameters for saccharated iron oxide. |
| popPK | Beguin_2014 | irrelevant | 0 | 0 | The paper is a review of iron sucrose, not saccharated iron oxide, and contains no original quantitative PK parameters. |
| popPK | Berry_1965 | irrelevant | 0 | 0 | The study uses saccharated iron oxide as a tool to activate the reticuloendothelial system in mice to study endotoxin tolerance, not to characterize its pharmacokinetic parameters. |
| popPK | Beshara_1999 | relevant | 9 | 2 | The study reports a three-compartment PK model for saccharated iron oxide (Venofer) in minipigs, but specific numeric parameter values (CL, V, Q, ka) are not explicitly listed in the provided text. |
| popPK | Beshara_1999_2 | irrelevant | 2 | 0 | The study investigates iron(III) hydroxide-sucrose complex, not saccharated iron oxide, and reports qualitative PET uptake and utilization percentages rather than standard PK parameters for the target drug. |
| popPK | Beshara_2003 | irrelevant | 0 | 0 | The study investigates iron polymaltose, not saccharated iron oxide. |
| popPK | Borawski_2004 | irrelevant | 0 | 0 | The study investigates endothelial injury markers in response to iron sucrose, not the pharmacokinetic disposition parameters of saccharated iron oxide. |
| popPK | Branson_2011 | irrelevant | 0 | 0 | no_text gate: only 39 chars of text extracted (&lt; 400) |
| PD | Branson_2011 | not_relevant | 0 | 0 | The provided text is a title about oxygen and does not contain any information regarding saccharated iron oxide, pharmacodynamics, or exposure-response relationships. |
| popPK | Breborowicz_2006 | irrelevant | 0 | 0 | The study investigates the nephrotoxicity and morphological changes in rat kidneys caused by iron sucrose, not the pharmacokinetic parameters (CL, V, etc.) of saccharated iron oxide. |
| popPK | Breymann_2002 | irrelevant | 0 | 0 | The paper is a review of iron deficiency in pregnancy and discusses iron sucrose, not saccharated iron oxide, and contains no quantitative PK parameters. |
| popPK | Cao_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ferric carboxymaltose (FCM), not saccharated iron oxide. |
| popPK | Cernaro_2016 | irrelevant | 0 | 0 | The paper is a review of sucroferric oxyhydroxide (a different drug), not saccharated iron oxide, and contains no quantitative PK parameters for the target drug. |
| popPK | Chauhan_2023 | irrelevant | 0 | 0 | The study compares iron sucrose and ferrous sulfate for treating anemia and reports clinical outcomes (Hb, ferritin), not pharmacokinetic parameters for saccharated iron oxide. |
| popPK | Chong_2014 | irrelevant | 0 | 0 | The study investigates the effect of sucroferric oxyhydroxide on the pharmacokinetics of other drugs (losartan, furosemide, etc.), not the pharmacokinetic parameters of sucroferric oxyhydroxide itself. |
| popPK | Cozzolino_2014 | irrelevant | 0 | 0 | The paper studies sucroferric oxyhydroxide (Velphoro), which is a different drug from saccharated iron oxide, and does not report PK parameters for the target drug. |
| popPK | Danielson_1996 | irrelevant | 0 | 0 | The study investigates iron(III)-hydroxide sucrose complex (Venofer), which is a different drug from saccharated iron oxide (SIO). |
| popPK | Danielson_2003 | irrelevant | 0 | 0 | no_text gate: only 48 chars of text extracted (&lt; 400) |
| popPK | Deng_2017 | irrelevant | 0 | 0 | The study investigates the efficacy of iron sucrose (not saccharated iron oxide) for restless legs syndrome and reports clinical outcomes and iron status markers, not pharmacokinetic parameters. |
| popPK | Funk_2022 | irrelevant | 0 | 0 | The study investigates ferric carboxymaltose, iron sucrose, iron isomaltoside, and iron dextran, but does not include saccharated iron oxide as a subject drug. |
| popPK | Garbowski_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ferric carboxymaltose, iron sucrose, and iron isomaltoside, not saccharated iron oxide. |
| popPK | Georgopoulos_2005 | irrelevant | 0 | 0 | The study focuses on the efficacy of recombinant human erythropoietin (rHuEPO) in critically ill patients, using iron saccharate as a co-administered agent, and does not report pharmacokinetic parameters for saccharated iron oxide. |
| popPK | Halamoda-Kenzaoui_2022 | irrelevant | 0 | 0 | The paper is a regulatory science review regarding nanotechnology and does not contain any pharmacokinetic data for saccharated iron oxide. |
| PD | Halamoda-Kenzaoui_2022 | not_relevant | 0 | 0 | The paper is a regulatory science perspective on nanotechnology standardization and does not report any pharmacodynamic or exposure-response data for saccharated iron oxide. |
| popPK | Hasa_2020 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of tetraene (an Echinacea component), not saccharated iron oxide. |
| PD | Hasa_2020 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics (PK) of a transdermal patch for tetraene (Echinacea extract) and does not report any pharmacodynamic (PD) or exposure-response relationship for saccharated iron oxide. |
| popPK | Hollands_2006 | irrelevant | 0 | 0 | The study focuses on the safety of iron sucrose (a different drug) and does not report pharmacokinetic parameters for saccharated iron oxide. |
| popPK | Kang_2026 | irrelevant | 0 | 0 | The paper describes a computational model for predicting drug-food interactions and does not report pharmacokinetic parameters for saccharated iron oxide. |
| PD | Kang_2026 | not_relevant | 0 | 0 | The paper describes a machine learning model for predicting drug-food interactions and does not report any pharmacodynamic or exposure-response data for saccharated iron oxide. |
| popPK | Koutroubakis_2006 | irrelevant | 0 | 0 | The study investigates the clinical efficacy of darbepoetin-alfa and iron sucrose for anemia, not the pharmacokinetics of saccharated iron oxide. |
| popPK | Manley_2004 | irrelevant | 0 | 0 | The study is an in-vitro dialyzability experiment for iron sucrose and iron dextran, not a pharmacokinetic study of saccharated iron oxide. |
| popPK | Meadows_2022 | irrelevant | 0 | 0 | The study focuses on iron sucrose, not saccharated iron oxide, and is a case report without compartmental PK parameters. |
| popPK | Mesgarpour_2017 | irrelevant | 0 | 0 | The paper is a systematic review of erythropoiesis-stimulating agents (ESAs) in critically ill patients and does not contain pharmacokinetic data for saccharated iron oxide. |
| PD | Mesgarpour_2017 | not_relevant | 0 | 0 | The paper is a systematic review of clinical trials regarding the safety and mortality outcomes of erythropoiesis-stimulating agents, containing no pharmacokinetic or pharmacodynamic modeling or numeric PD parameters. |
| popPK | Neven_2020 | irrelevant | 0 | 0 | The study investigates the renoprotective and mineral homeostasis effects of sucroferric oxyhydroxide (PA21) in rats, not the pharmacokinetic parameters (CL, V, etc.) of saccharated iron oxide. |
| popPK | Okada_1983 | irrelevant | 0 | 0 | The study reports pharmacodynamic effects (hypophosphatemia) and renal phosphate handling, not pharmacokinetic disposition parameters (CL, V, t1/2) for saccharated iron oxide. |
| popPK | Pai_2018 | irrelevant | 0 | 0 | The study focuses on labile iron release from various IV iron formulations (Venofer, Ferrlecit, etc.) and does not report pharmacokinetic parameters for saccharated iron oxide. |
| popPK | Parrot_2026 | irrelevant | 0 | 0 | The paper is a general review of pharmacokinetic modeling for nanoparticles and does not report specific quantitative PK parameters for saccharated iron oxide. |
| PD | Parrot_2026 | not_relevant | 0 | 0 | The text is a review of pharmacokinetic modeling frameworks for nanoparticles and does not report any specific pharmacodynamic or exposure-response data for saccharated iron oxide. |
| popPK | Rhee_2023 | irrelevant | 0 | 0 | The study evaluates sucroferric oxyhydroxide (a phosphate binder) in hemodialysis patients and does not report pharmacokinetic parameters for saccharated iron oxide. |
| popPK | Rostoker_2022 | irrelevant | 0 | 0 | The study investigates iron sucrose, ferric carboxymaltose, and iron isomaltoside, not saccharated iron oxide. |
| popPK | Silverberg_2001 | irrelevant | 0 | 0 | The study uses iron sucrose (Venofer) as a therapeutic agent to treat anemia and reports clinical outcomes (hematocrit/hemoglobin), not pharmacokinetic parameters for saccharated iron oxide. |
| popPK | Silverberg_2005 | irrelevant | 0 | 0 | The study focuses on clinical outcomes of epoetin beta and iron sucrose in heart failure patients, not the pharmacokinetics of saccharated iron oxide. |
| popPK | Toblli_2007 | irrelevant | 0 | 0 | The study evaluates clinical outcomes (NT-proBNP, CRP) of iron sucrose therapy and does not report pharmacokinetic parameters for saccharated iron oxide. |
| popPK | Toblli_2009 | irrelevant | 0 | 0 | The study investigates iron sucrose (not saccharated iron oxide) and focuses on safety/toxicology markers (hemodynamics, oxidative stress) rather than pharmacokinetic parameters. |
| popPK | Toblli_2010 | irrelevant | 0 | 0 | The study compares toxicity of other iron compounds (dextran, ferric gluconate, etc.) and does not include saccharated iron oxide or report PK parameters for it. |
| popPK | Wood_2005 | irrelevant | 1 | 0 | The paper is a case report of iron sucrose (a different iron formulation) toxicity in a child and does not report quantitative pharmacokinetic parameters for saccharated iron oxide. |
| popPK | Wu_2010 | irrelevant | 0 | 0 | The study compares iron sucrose and ferric chloride, not saccharated iron oxide, and reports clinical efficacy indices rather than pharmacokinetic parameters. |
| popPK | Yee_2002 | irrelevant | 1 | 1 | The paper discusses iron sucrose, not saccharated iron oxide, and provides only general pharmacokinetic descriptors (volume, half-life) for the wrong drug. |
| popPK | unknown_2010 | irrelevant | 0 | 0 | no_text gate: only 39 chars of text extracted (&lt; 400) |
| PD | unknown_2010 | not_relevant | 0 | 0 | The provided text is only a header for a poster session and contains no scientific content, data, or PD parameters. |
| popPK | unknown_2017 | irrelevant | 0 | 0 | no_text gate: only 71 chars of text extracted (&lt; 400) |
| PD | unknown_2017 | not_relevant | 0 | 0 | The provided text is only a title for a conference abstract collection and contains no data, analysis, or parameters regarding saccharated iron oxide. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
