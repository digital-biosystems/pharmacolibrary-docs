<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B03A&quot;,&quot;href&quot;:&quot;atc/B03A.md&quot;},{&quot;label&quot;:&quot;ferric sodium citrate&quot;}]"></div>

# ferric sodium citrate

- **generic name:** ferric sodium citrate
- **ATC codes:** `B03AB01`
- **DrugBank:** [DB13771](https://go.drugbank.com/drugs/DB13771) · **PubChem:** not captured
- **molar mass:** 266.926 g/mol (C6H4FeNaO7) — DrugBank
- **groups:** investigational

## About

Ferric sodium citrate is a trivalent oral iron preparation intended for use as an antianemic agent, i.e. to treat iron-deficiency anaemia. It is currently classed as investigational and does not appear to be an approved medicine in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27258614](https://www.wikidata.org/wiki/Q27258614) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 20:00 | 0:44 | 0/0/0 | 0/0/0 | 0/0/0 | 26,043/915 | ollama / qwen3.8:27b-mtp-q8_0 | 10 | 1/2 | 10/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 13 matched, 13 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bauer_1981 | irrelevant | 0 | 0 | The study investigates iron turnover kinetics in rats using ferric citrate as a tracer, not the pharmacokinetics of the drug ferric sodium citrate. |
| popPK | Bronstein_2008 | irrelevant | 0 | 0 | The paper is an in-vitro microbiology study on Pseudomonas syringae gene regulation in response to iron citrate, not a pharmacokinetic study of ferric sodium citrate. |
| popPK | Dietzfelbinger_1977 | irrelevant | 2 | 0 | The study measures bioavailability via serum iron concentration curves rather than reporting quantitative pharmacokinetic parameters (CL, V, ka) for ferric sodium citrate. |
| popPK | Feng_2019 | irrelevant | 0 | 0 | The study focuses on siderophore-chelated iron, and ferric citrate is used only as a comparator for relative bioavailability, not as the subject drug for PK parameter estimation. |
| popPK | Fritz_1975 | irrelevant | 0 | 0 | The study measures relative biological value (bioavailability) of iron sources in rats, not pharmacokinetic disposition parameters (CL, V, ka) for ferric sodium citrate. |
| popPK | Grootveld_1989 | irrelevant | 0 | 0 | The study characterizes non-transferrin-bound iron complexes in hemochromatosis patients using HPLC and NMR, but does not report pharmacokinetic parameters (CL, V, etc.) for ferric sodium citrate. |
| popPK | Halleux_1994 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of iron transport in CaCo-2 cells and does not report quantitative pharmacokinetic parameters (CL, V, t1/2) for ferric sodium citrate in a biological system. |
| popPK | Hsu_1999 | irrelevant | 0 | 0 | The study measures intestinal phosphate binding and absorption balance in rats, not the pharmacokinetic disposition parameters (CL, V, ka) of ferric sodium citrate itself. |
| popPK | Kittilukkana_2024 | irrelevant | 0 | 0 | The study investigates the mechanistic effects of ferric citrate on brain proteostasis in vitro and in vivo, but does not report pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Kovár_1997 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on iron regulation in cell lines, not a pharmacokinetic study of ferric sodium citrate. |
| popPK | Lau_2018 | irrelevant | 0 | 0 | The study focuses on gut microbiome changes and clinical outcomes (hemoglobin, creatinine clearance) rather than pharmacokinetic parameters of ferric citrate. |
| popPK | Lay_1987 | irrelevant | 0 | 0 | The study focuses on the generation and characterization of metallic oxide aerosols (specifically cobalt and iron oxides) for pulmonary clearance studies in calves, not the pharmacokinetics of ferric sodium citrate as a drug. |
| popPK | Lin_2022 | irrelevant | 0 | 0 | The study focuses on the bioavailability of lead (Pb) and the inhibitory effects of various iron compounds, not the pharmacokinetic parameters (CL, V, etc.) of ferric sodium citrate itself. |
| popPK | Maznah_1999 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation using Caco-2 cells and does not report quantitative pharmacokinetic parameters for ferric sodium citrate. |
| popPK | Männer_2021 | irrelevant | 0 | 0 | The paper is a safety and digestibility study in animals (broilers and piglets) that reports performance and biochemistry data, but does not contain pharmacokinetic parameters (CL, V, ka, etc.) for ferric sodium citrate. |
| popPK | Navarrete_2024 | irrelevant | 0 | 0 | The study reports clinical outcomes (ferritin levels and iron accumulation) rather than pharmacokinetic parameters (CL, V, ka, etc.) for ferric citrate. |
| popPK | Naviglio_2018 | irrelevant | 0 | 0 | The paper is a chemical synthesis and characterization study of iron(II) citrate, not a pharmacokinetic study, and does not report any disposition parameters for ferric sodium citrate. |
| popPK | Ohta_1999 | irrelevant | 0 | 0 | The study investigates iron bioavailability and anemia prevention in rats using iron-citrate as a dietary source, not the pharmacokinetics of the drug ferric sodium citrate. |
| popPK | Paik_2015 | irrelevant | 0 | 0 | The paper is an in-vitro study on the physicochemical properties and cytotoxicity of iron oxide nanoparticles and iron citrate, not a pharmacokinetic study of ferric sodium citrate. |
| popPK | Pangjit_2015 | irrelevant | 0 | 0 | The study characterizes a novel iron chelator (CM1) and does not report pharmacokinetic parameters for ferric sodium citrate. |
| popPK | Paulson_2022 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of vadadustat, with ferric citrate serving only as a co-administered phosphate binder/comparator agent. |
| popPK | Sarria_2005 | irrelevant | 0 | 0 | The study investigates iron absorption using iron isotopes (Fe-57/Fe-58) and does not involve the drug ferric_sodium_citrate. |
| popPK | Scheiber-Mojdehkar_1999 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of iron uptake in rat hepatocytes, not a pharmacokinetic study of ferric sodium citrate disposition. |
| popPK | Singh_2022 | irrelevant | 0 | 0 | The paper is a review of nano-formulations for iron deficiency anemia and does not report quantitative pharmacokinetic parameters for ferric sodium citrate. |
| popPK | Tako_2013 | irrelevant | 0 | 0 | The study investigates iron bioavailability from maize in broiler chickens and Caco-2 cells, not the pharmacokinetics of ferric sodium citrate. |
| popPK | Tzror-Azankot_2022 | irrelevant | 0 | 0 | The study is an in-vitro investigation of phosphate binding by ferric citrate liposomes and does not report pharmacokinetic parameters (CL, V, ka, etc.) for ferric sodium citrate. |
| popPK | Yokoi_2009 | irrelevant | 0 | 0 | The study measures iron bioavailability using the Hb regeneration efficiency method and does not report pharmacokinetic parameters (CL, V, ka, etc.) for ferric sodium citrate. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
