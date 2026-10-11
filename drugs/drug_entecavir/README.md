<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;entecavir&quot;}]"></div>

# entecavir

- **generic name:** entecavir
- **ATC codes:** `J05AF10`
- **DrugBank:** [DB00442](https://go.drugbank.com/drugs/DB00442) · **PubChem:** [CID 153941](https://pubchem.ncbi.nlm.nih.gov/compound/153941)
- **molar mass:** 277.2792 g/mol (C12H15N5O3) — DrugBank
- **groups:** approved, investigational

## About

Entecavir is an antiviral medicine used to treat chronic hepatitis B. It is authorised in the European Union and is included on the WHO list of essential medicines, so it is widely used.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q418586](https://www.wikidata.org/wiki/Q418586) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| entecavir | parent | 277.279 | C12H15N5O3 | DrugBank | [153941](https://pubchem.ncbi.nlm.nih.gov/compound/153941) | Yoshitsugu_2011 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 15:43 | 11:11 | 0/0/1 | 3/0/0 | 0/0/0 | 357,987/50,175 | openai / gpt-6-luna | 10 | 2/8 | 9/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Yoshitsugu_2011_reference](drugs/drug_entecavir/Entecavir_Yoshitsugu2011_reference.md) | — | 1-compartment (no model) | 1 | Yoshitsugu H et al., Pooled model-based approach to compare…, Diagnostic microbiology and… (2011) | [10.1016/j.diagmicrobio.2010.12.009](https://doi.org/10.1016/j.diagmicrobio.2010.12.009) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Kumamoto_2023_CC50](drugs/drug_entecavir/pd_Kumamoto_2023_CC50.md) | cytotoxicity ← entecavir · stimulation effect | — | Kumamoto H et al., Synthesis of novel entecavir analogues…, RSC advances (2023) | [10.1039/d3ra01750h](https://doi.org/10.1039/d3ra01750h) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Kumamoto_2023_HBV_DNA](drugs/drug_entecavir/pd_Kumamoto_2023_HBV_DNA.md) | HBV DNA ← entecavir · inhibition effect | — | Kumamoto H et al., Synthesis of novel entecavir analogues…, RSC advances (2023) | [10.1039/d3ra01750h](https://doi.org/10.1039/d3ra01750h) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Liu_2015_Intracellular_HBV_replicative_intermediates](drugs/drug_entecavir/pd_Liu_2015_Intracellular_HBV_replicative_intermediates.md) | Intracellular HBV replicative intermediates ← entecavir · inhibition effect | — | Liu Y et al., The rtA181S mutation of hepatitis B vir…, Journal of viral hepatitis (2015) | [10.1111/jvh.12298](https://doi.org/10.1111/jvh.12298) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Zhao_2021_Gluc](drugs/drug_entecavir/pd_Zhao_2021_Gluc.md) | CoV-Gluc activity ← Entecavir · inhibition effect | — | Zhao J et al., A cell-based assay to discover inhibito…, Antiviral research (2021) | [10.1016/j.antiviral.2021.105078](https://doi.org/10.1016/j.antiviral.2021.105078) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 25 matched, 20 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Yoshitsugu_2011.pdf` | Yoshitsugu H et al., Pooled model-based approach to compare…, Diagnostic microbiology and… (2011) | popPK | 10 | [10.1016/j.diagmicrobio.2010.12.009](https://doi.org/10.1016/j.diagmicrobio.2010.12.009) | [21513847](https://pubmed.ncbi.nlm.nih.gov/21513847) | Human population-PK model reports oral clearance of 26.4 L/h and interindividual variability of 19.4%. |

<sub>queue written 2026-10-07T15:33:28.713689+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chan_2016 | relevant | 9 | 0 | This is a human entecavir PK study, but the provided evidence contains only demographic data and no entecavir disposition parameter values. |
| popPK | Huang_2020 | irrelevant | 0 | 0 | Entecavir is only an antiviral comparator, and no entecavir disposition parameters are reported. |
| popPK | Imoto_2015 | irrelevant | 0 | 0 | This is an in-vitro anti-HBV activity study and reports no entecavir pharmacokinetic parameters. |
| popPK | Jiang_2020 | irrelevant | 0 | 0 | The study reports antiviral EC50 values, not entecavir pharmacokinetic disposition parameters. |
| popPK | Kong_2019 | irrelevant | 0 | 0 | This clinical fibrosis study reports no quantitative pharmacokinetic disposition parameters for entecavir. |
| popPK | Kumada_2026 | irrelevant | 0 | 0 | This is a clinical efficacy comparison and reports no quantitative entecavir disposition parameters. |
| popPK | Kumamoto_2023 | irrelevant | 0 | 0 | This is a synthesis and in-vitro antiviral-activity study, with no quantitative entecavir disposition parameters. |
| popPK | Li_2025 | irrelevant | 0 | 0 | This is a human renal-safety study and reports no entecavir pharmacokinetic disposition parameters. |
| popPK | Lin_2019 | irrelevant | 0 | 0 | The study examines HBsAg kinetics during entecavir therapy and reports no entecavir pharmacokinetic parameters. |
| popPK | Liu_2015 | irrelevant | 0 | 0 | Entecavir is only an antiviral comparator or rescue therapy; no entecavir disposition parameters are reported. |
| popPK | Mani_2018 | irrelevant | 0 | 0 | Entecavir is only a combination antiviral; no entecavir disposition parameters are reported. |
| popPK | Mauss_2011 | irrelevant | 0 | 0 | Reports renal-function changes during entecavir treatment, not entecavir pharmacokinetic parameters. |
| popPK | Peng_2022 | irrelevant | 0 | 0 | This study reports renal-function outcomes during entecavir treatment, not quantitative pharmacokinetic disposition parameters for entecavir. |
| popPK | Ren_2017 | irrelevant | 0 | 0 | Entecavir is only a comparator in a cell assay; the reported pharmacokinetic profiles are for GLS4. |
| popPK | Squires_2020 | irrelevant | 0 | 0 | Entecavir is only an in-vitro antiviral comparator; no entecavir disposition parameters are reported. |
| popPK | Tan_2006 | irrelevant | 0 | 0 | Entecavir is mentioned only as a current treatment; the study reports antiviral activity of different compounds, not entecavir PK parameters. |
| popPK | Udompap_2018 | irrelevant | 0 | 0 | This renal-function outcomes study reports no quantitative pharmacokinetic disposition parameters for entecavir. |
| popPK | Zhang_2017 | irrelevant | 1 | 0 | This human renal-function study reports eGFR outcomes, not quantitative entecavir disposition or population-PK parameters. |
| popPK | Zhao_2021 | irrelevant | 0 | 0 | This is an in-vitro antiviral activity assay, not a PK study, and entecavir-specific EC50 values are only shown in a figure not provided. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 15:33 UTC</sub>
