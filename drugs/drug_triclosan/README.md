<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D08A&quot;,&quot;href&quot;:&quot;atc/D08A.md&quot;},{&quot;label&quot;:&quot;triclosan&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Triclosan_Siddiqui1979_reference&quot;,&quot;label&quot;:&quot;Siddiqui_1979_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_triclosan/Triclosan_Siddiqui1979_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# triclosan

- **generic name:** triclosan
- **ATC codes:** `D08AE04`, `D09AA06`
- **DrugBank:** [DB08604](https://go.drugbank.com/drugs/DB08604) · **PubChem:** [CID 5564](https://pubchem.ncbi.nlm.nih.gov/compound/5564)
- **molar mass:** 289.542 g/mol (C12H7Cl3O2) — DrugBank
- **groups:** approved

## About

Triclosan is an antimicrobial agent used as an antiseptic and disinfectant, for example in skin antisepsis and medicated dressings. It is an approved substance and remains in use, mainly in topical dermatological products such as antiseptics and anti-infective dressings.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q408646](https://www.wikidata.org/wiki/Q408646) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| triclosan | parent | 289.542 | C12H7Cl3O2 | DrugBank | [5564](https://pubchem.ncbi.nlm.nih.gov/compound/5564) | Siddiqui_1979 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:02 | 2:29 | 1/0/0 | 2/0/0 | 0/0/0 | 181,915/6,711 | einfracz / qwen3.8-27b | 6 | 3/3 | 5/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Siddiqui_1979_reference](drugs/drug_triclosan/Triclosan_Siddiqui1979_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Siddiqui WH et al., Pharmacokinetics of triclosan in rat af…, Journal of environmental pa… (1979) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">fish</span> | [Alvarado-López_2026_EC50](drugs/drug_triclosan/pd_Alvarado_L_pez_2026_EC50.md) | Malformations ← triclosan · inhibition effect | — | Alvarado-López AN et al., Triclosan toxicity during Danio rerio o…, Ecotoxicology (London, Engl… (2026) | [10.1007/s10646-026-03072-1](https://doi.org/10.1007/s10646-026-03072-1) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">fish</span> | [Alvarado-López_2026_LC50](drugs/drug_triclosan/pd_Alvarado_L_pez_2026_LC50.md) | Lethality ← triclosan · inhibition effect | — | Alvarado-López AN et al., Triclosan toxicity during Danio rerio o…, Ecotoxicology (London, Engl… (2026) | [10.1007/s10646-026-03072-1](https://doi.org/10.1007/s10646-026-03072-1) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Kasi_2025_MTT](drugs/drug_triclosan/pd_Kasi_2025_MTT.md) | cell viability ← Triclosan · inhibition effect | — | Kasi SR et al., In vitro cytotoxicity (irritant potency…, PloS one (2025) | [10.1371/journal.pone.0318565](https://doi.org/10.1371/journal.pone.0318565) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=triclosan) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| — | prostate gland | `AR` unknown | DrugBank actor |

<sub>Actors without a tissue in the table: NOS3 (stimulator), NR1I2 (unknown), NR1I3 (inverse agonist), PPARG (unknown), TPO (weak inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 78 matched, 20 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Siddiqui_1979.pdf` | Siddiqui WH et al., Pharmacokinetics of triclosan in rat af…, Journal of environmental pa… (1979) | popPK | 10 | not captured | [422939](https://pubmed.ncbi.nlm.nih.gov/422939) | The abstract explicitly reports quantitative pharmacokinetic parameters (Vd, half-life, clearance) for triclosan in rats. |

<sub>queue written 2026-10-07T08:00:55.257160+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ajao_2015 | irrelevant | 0 | 0 | The paper describes in vitro mitochondrial toxicity mechanisms in cell lines, not a pharmacokinetic study of disposition parameters. |
| popPK | Akūlova_2026 | irrelevant | 0 | 0 | The study is an epidemiological biomonitoring analysis examining the spatial association between pesticide detection in urine and land use, not a pharmacokinetic study, and contains no PK parameters for triclosan. |
| popPK | Alvarado-López_2026 | irrelevant | 0 | 0 | The study is a toxicological assessment in zebrafish reporting LC50/EC50 values, not pharmacokinetic parameters. |
| popPK | Alves_2007 | irrelevant | 0 | 0 | This is a materials science study on the corrosion resistance of titanium alloy in mouthwashes, not a pharmacokinetic study of triclosan disposition. |
| popPK | Atengueño-Reyes_2023 | irrelevant | 0 | 0 | The study investigates microalgal tolerance and growth effects (EC50) in wastewater, not pharmacokinetic parameters for triclosan. |
| popPK | Bedoux_2012 | irrelevant | 0 | 0 | The paper is an environmental review of triclosan occurrence and degradation, not a pharmacokinetic study reporting disposition parameters like clearance or volume of distribution. |
| popPK | Bertucci_2026 | irrelevant | 0 | 0 | The paper is an ecotoxicology study on sea urchin embryo development and does not report pharmacokinetic parameters. |
| popPK | Bommarito_2024 | irrelevant | 0 | 0 | The study investigates associations between prenatal triclosan exposure and fetal growth outcomes, not the pharmacokinetic parameters (CL, V, etc.) of the drug itself. |
| popPK | Chiaia-Hernandez_2013 | irrelevant | 1 | 0 | The study focuses on bioconcentration (BCF) and accumulation in Daphnia resting eggs rather than reporting pharmacokinetic disposition parameters (CL, V, Q, t1/2) for triclosan in a standard PK context. |
| popPK | Ding_2022 | irrelevant | 0 | 0 | The study investigates ecological toxicity and molecular mechanisms in algae (Euglena gracilis), not pharmacokinetic disposition parameters. |
| popPK | Hurtado_2016 | irrelevant | 0 | 0 | The study models the uptake and biodegradation of triclosan in lettuce plants, not the pharmacokinetics (disposition) in humans or animals. |
| popPK | Kasi_2025 | irrelevant | 0 | 0 | The study is an in vitro cytotoxicity assessment of toothpaste ingredients and does not report pharmacokinetic parameters such as clearance, volume, or half-life for triclosan. |
| popPK | Orvos_2002 | irrelevant | 0 | 0 | The study reports aquatic toxicity and bioconcentration factors in fish and algae, not pharmacokinetic disposition parameters (CL, V, Ka) for the drug. |
| popPK | Smarr_2018 | irrelevant | 0 | 0 | This is an epidemiological study measuring urinary biomarkers of triclosan exposure and its association with semen quality, not a pharmacokinetic study determining disposition parameters like clearance or volume. |
| popPK | Smarr_2018_2 | irrelevant | 0 | 0 | This is an epidemiological study of seminal plasma EDC concentrations, not a pharmacokinetic study with disposition parameters for triclosan. |
| popPK | Weiss_2015 | irrelevant | 0 | 0 | This is an exposure epidemiology study reporting urinary concentrations of triclosan, not a pharmacokinetic study with disposition parameters (CL, V, half-life). |
| popPK | Wu_2026 | irrelevant | 0 | 0 | The study is a microbiological mechanism paper on triclosan resistance in cyanobacteria, reporting EC50 values rather than pharmacokinetic parameters (CL, V, t1/2) for a drug subject. |
| popPK | Yoon_2023 | irrelevant | 0 | 0 | The study investigates adsorption behavior and acute toxicity in D. magna, not pharmacokinetics. |
| popPK | Zhao_2019 | irrelevant | 0 | 0 | Triclosan is used only as an in vitro inhibitor of reductive metabolism, not as the subject drug for PK parameter estimation. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 08:00 UTC</sub>
