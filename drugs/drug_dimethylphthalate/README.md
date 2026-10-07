<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P03B&quot;,&quot;href&quot;:&quot;atc/P03B.md&quot;},{&quot;label&quot;:&quot;dimethylphthalate&quot;}]"></div>

# dimethylphthalate

- **generic name:** dimethylphthalate
- **ATC codes:** `P03BX02`
- **DrugBank:** [DB13336](https://go.drugbank.com/drugs/DB13336) · **PubChem:** not captured
- **molar mass:** 194.184 g/mol (C10H10O4) — DrugBank
- **groups:** experimental

## About

Dimethylphthalate is an insect repellent, classified among ectoparasiticides used to repel insects. It is currently considered experimental and does not appear to be an approved medicine in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q423551](https://www.wikidata.org/wiki/Q423551) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 13:09 | 2:07 | 0/0/0 | 0/1/0 | 0/0/0 | 29,202/1,061 | ollama / glm-5.3-flash | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Wang_2016_bioluminescence_inhibition_of_Photobacterium_phosphoreum_T3](drugs/drug_dimethylphthalate/pd_Wang_2016_bioluminescence_inhibition_of_Photobacterium_phosp.md) | bioluminescence inhibition of Photobacterium phosphoreum T3 ← dimethyl phthalate (DMP) · inhibition effect | — | Wang W et al., Eco-toxicological bioassay of atmospher…, Ecotoxicology and environme… (2016) | [10.1016/j.ecoenv.2016.07.024](https://doi.org/10.1016/j.ecoenv.2016.07.024) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ding_2017.pdf` | Ding K et al., In vitro and in silico investigations o…, The Science of the total en… (2017) | pd | 4 | [10.1016/j.scitotenv.2016.12.062](https://doi.org/10.1016/j.scitotenv.2016.12.062) | [27993475](https://www.ncbi.nlm.nih.gov/pubmed/27993475) | metadata signals extractable PD data (EC50) |
| `Gao_2021.pdf` | Gao K et al., Oxidative stress responses caused by di…, Marine pollution bulletin (2021) | pd | 4 | [10.1016/j.marpolbul.2021.112222](https://doi.org/10.1016/j.marpolbul.2021.112222) | [33711610](https://www.ncbi.nlm.nih.gov/pubmed/33711610) | metadata signals extractable PD data (EC50) |
| `Mack_2014.pdf` | Mack CM et al., Burst and principal components analyses…, Neurotoxicology (2014) | pd | 4 | [10.1016/j.neuro.2013.11.008](https://doi.org/10.1016/j.neuro.2013.11.008) | [24325902](https://www.ncbi.nlm.nih.gov/pubmed/24325902) | metadata signals extractable PD data (EC50) |
| `de_2015.pdf` | de Araujo MM et al., Lightsticks content toxicity: effects o…, Chemosphere (2015) | pd | 4 | [10.1016/j.chemosphere.2015.05.058](https://doi.org/10.1016/j.chemosphere.2015.05.058) | [26070145](https://www.ncbi.nlm.nih.gov/pubmed/26070145) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-07T13:09:09.995393+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ding_2017 | irrelevant | 0 | 0 | This is an in vitro ecotoxicity study of phthalate mixtures in bacteria, with no pharmacokinetic disposition parameters for dimethylphthalate. |
| popPK | Gao_2021 | irrelevant | 0 | 0 | Toxicity/removal-rate study in a diatom, not a pharmacokinetic study with disposition parameters for DMP. |
| popPK | Hou_2009 | irrelevant | 0 | 0 | This is an electrochemical degradation study, not a pharmacokinetic study; no CL, V, or population-PK parameters for dimethyl phthalate in any organism. |
| popPK | Liu_2009 | irrelevant | 0 | 0 | This is an embryonic toxicity (EC50) study in abalone, not a pharmacokinetic study with disposition parameters for dimethylphthalate. |
| popPK | Mack_2014 | irrelevant | 0 | 0 | In-vitro neurotoxicity screening study; DMP only tested for firing-rate effects, no PK parameters. |
| popPK | Pérez-Albaladejo_2017 | irrelevant | 0 | 0 | In-vitro cytotoxicity/endocrine study in placental cells with no PK disposition parameters for dimethyl phthalate. |
| PGx | Sun_2026 | not_relevant | 0 | 0 | No gene variant/genotype effect on DMP pharmacokinetic or pharmacodynamic parameters is reported; study covers network toxicology, MR of gene expression on ASD risk, and mouse behavior. |
| popPK | Wang_2016 | irrelevant | 0 | 0 | This is an eco-toxicity bioassay of PM2.5 with only EC50 toxicity ranking; no pharmacokinetic parameters for dimethyl phthalate are reported. |
| popPK | de_2015 | irrelevant | 0 | 0 | Toxicity/chemical composition study of lightstick leachates; no pharmacokinetic parameters for dimethyl phthalate. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
