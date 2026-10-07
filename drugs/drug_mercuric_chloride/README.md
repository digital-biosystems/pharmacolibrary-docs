<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D08A&quot;,&quot;href&quot;:&quot;atc/D08A.md&quot;},{&quot;label&quot;:&quot;mercuric chloride&quot;}]"></div>

# mercuric chloride

- **generic name:** mercuric chloride
- **ATC codes:** `D08AK03`
- **DrugBank:** [DB13765](https://go.drugbank.com/drugs/DB13765) · **PubChem:** not captured
- **molar mass:** 271.5 g/mol (Cl2Hg) — DrugBank
- **groups:** experimental

## About

Mercuric chloride, also known as corrosive sublimate, is a mercury compound that has been used as an antiseptic and disinfectant for skin and other surfaces. It is no longer in common medical use because of its high toxicity, and it is currently regarded as an experimental substance rather than an approved medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q143200](https://www.wikidata.org/wiki/Q143200) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| mercuric_chloride | metabolite | 271.5 | Cl2Hg | DrugBank | — | Sundberg_1998 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:37 | 4:32 | 0/1/1 | 0/1/0 | 0/0/0 | 100,443/4,534 | einfracz / qwen3.8-27b | 6 | 0/5 | 5/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">None</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.8). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">pig</span><br><sub>STALE — current validate: not captured</sub> | [Komsta-Szumska_1984_reference](drugs/drug_mercuric_chloride/MercuricChloride_KomstaSzumska1984_reference.md) | — | — (no model) | 0 | Komsta-Szumska E et al., A kinetic analysis of the interaction b…, Toxicology (1984) | [10.1016/0300-483x(84)90039-8](https://doi.org/10.1016/0300-483x(84)90039-8) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.333). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">mouse</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Sundberg_1998_reference](drugs/drug_mercuric_chloride/MercuricChloride_Sundberg1998_reference.md) | — | parent + metabolite (no model) | 1 | Sundberg J et al., Kinetics of methylmercury and inorganic…, Toxicology and applied phar… (1998) | [10.1006/taap.1998.8456](https://doi.org/10.1006/taap.1998.8456) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Gassó_2000_3H_NA_release](drugs/drug_mercuric_chloride/pd_Gass_2000_3H_NA_release.md) | [3H]noradrenaline release ← mercuric chloride · direct sigmoid Emax (Hill) effect | — | Gassó S et al., Pharmacological characterization of the…, Life sciences (2000) | [10.1016/s0024-3205(00)00715-3](https://doi.org/10.1016/s0024-3205(00)00715-3) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 126 matched, 70 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Sundberg_1998.pdf` | Sundberg J et al., Kinetics of methylmercury and inorganic…, Toxicology and applied phar… (1998) | popPK | 10 | [10.1006/taap.1998.8456](https://doi.org/10.1006/taap.1998.8456) | [9707508](https://pubmed.ncbi.nlm.nih.gov/9707508) | The abstract explicitly reports quantitative pharmacokinetic parameters (clearance, volume of distribution, half-life) for inorganic mercury (mercuric chloride) in mice, noting that while lactation affected methylmercury PK, no differences were observed for inorganic mercury parameters between the groups. |
| `Komsta-Szumska_1984.pdf` | Komsta-Szumska E et al., A kinetic analysis of the interaction b…, Toxicology (1984) | popPK | 9 | [10.1016/0300-483x(84)90039-8](https://doi.org/10.1016/0300-483x(84)90039-8) | [6515657](https://pubmed.ncbi.nlm.nih.gov/6515657) | The study reports quantitative kinetic parameters (half-lives, compartment models) for mercury from methylmercuric chloride in guinea pigs. |
| `Dunn_1981.pdf` | Dunn JD et al., Interaction of ethanol and inorganic me…, The Journal of pharmacology… (1981) | popPK | 5 | not captured | [7452505](https://pubmed.ncbi.nlm.nih.gov/7452505) | The study measures exhalation rates and retention times in mice but does not report standard compartmental PK parameters (CL, V, ka, t1/2) for mercuric chloride, and no numeric PK values are present in the text. |
| `Gassó_2000.pdf` | Gassó S et al., Pharmacological characterization of the…, Life sciences (2000) | pd | 4 | [10.1016/s0024-3205(00)00715-3](https://doi.org/10.1016/s0024-3205(00)00715-3) | [10954055](https://www.ncbi.nlm.nih.gov/pubmed/10954055) | metadata signals extractable PD data (EC50) |
| `de-Carvalho_2022.pdf` | de-Carvalho RR et al., Evaluation of the developmental toxicit…, Journal of toxicology and e… (2022) | pd | 4 | [10.1080/15287394.2022.2089413](https://doi.org/10.1080/15287394.2022.2089413) | [35723169](https://www.ncbi.nlm.nih.gov/pubmed/35723169) | metadata signals extractable PD data (EC50) |
| `Bošnjak_2013.pdf` | Bošnjak I et al., Quantification and in situ localisation…, Environmental science and p… (2013) | pgx | 7 | [10.1007/s11356-013-1819-2](https://doi.org/10.1007/s11356-013-1819-2) | [23690080](https://www.ncbi.nlm.nih.gov/pubmed/23690080) | metadata signals extractable PGX data (abcb1, PK/PD-context) |

<sub>queue written 2026-10-07T22:36:56.719942+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Auerbach_2016 | irrelevant | 0 | 0 | The paper is a high-throughput screening (ToxCast) prioritization study for obesity/diabetes chemicals and does not report pharmacokinetic parameters for mercuric chloride. |
| popPK | Bernard_1984 | irrelevant | 2 | 0 | The paper discusses compartmental models for mercury generally but does not provide quantitative PK parameter values (CL, V, ka) specifically for mercuric chloride in the provided text. |
| popPK | Biju_2026 | irrelevant | 0 | 0 | The paper is a review on bacterial endophytic metabolites and mentions mercuric chloride only as a surface sterilizing agent, not as a subject drug for pharmacokinetic analysis. |
| PGx | Bošnjak_2013 | not_relevant | 0 | 0 | The paper investigates contaminant-induced changes in transporter gene expression and activity in sea urchins, not human pharmacogenomics or the PK/PD of mercuric chloride as a therapeutic drug. |
| popPK | Buttino_2016 | irrelevant | 0 | 0 | The study is a toxicological assessment of malformations in sea urchins, reporting EC50 values and cellular effects rather than pharmacokinetic parameters like clearance or volume. |
| popPK | Dash_1988 | irrelevant | 0 | 0 | The study is an in-vitro/toxicological biomonitoring assay using Allium bulbs, not a pharmacokinetic study, and does not report PK parameters like clearance or volume. |
| popPK | Dunn_1981 | irrelevant | 5 | 0 | The study measures exhalation rates and retention times in mice but does not report standard compartmental PK parameters (CL, V, ka, t1/2) for mercuric chloride, and no numeric PK values are present in the text. |
| popPK | Fonfría_2001 | irrelevant | 0 | 0 | The paper describes an in-vitro mechanistic study of mercury's interaction with GABA(A) receptors in cell cultures, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Franz-Xaver_2003 | irrelevant | 0 | 0 | The study is an in vitro toxicology study investigating effects on gluconeogenesis and does not report pharmacokinetic disposition parameters for mercuric chloride. |
| popPK | Gassó_2000 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on neurotransmitter release in rat hippocampal slices, not a pharmacokinetic study. |
| popPK | Hernández-Flores_2006 | irrelevant | 0 | 0 | The paper is an ecotoxicology study in a freshwater rotifer measuring reproductive toxicity (EC50), not a pharmacokinetic study of mercuric chloride disposition parameters. |
| popPK | Huang_1993 | irrelevant | 0 | 0 | The study is an in-vitro toxicology assessment of neurotoxicity in cell lines, not a pharmacokinetic study measuring disposition parameters. |
| popPK | Ibrahim_2026 | irrelevant | 0 | 0 | This is an ex-vivo mechanistic study on vascular reactivity and signaling pathways, not a pharmacokinetic study reporting disposition parameters like clearance or volume for mercuric chloride. |
| PD | Ibrahim_2026 | not_relevant | 4 | 2 | The study reports qualitative changes in Emax and pD2 for Ang1-8 reactivity in ex-vivo rings but does not provide the specific numeric values or concentration-response curves required to extract PD parameters. |
| popPK | Inmon_1981 | irrelevant | 0 | 0 | The study is an in vitro toxicity assessment of mercuric chloride on rat liver cells, reporting EC50 values rather than pharmacokinetic parameters such as clearance or volume of distribution. |
| popPK | Kadyrov_2025 | irrelevant | 0 | 0 | This is a clinical chemistry/toxicology atlas for Sprague-Dawley rats studying 86 various toxins, but it does not report pharmacokinetic parameters (CL, V, etc.) for mercuric chloride specifically. |
| popPK | Kehe_2001 | irrelevant | 0 | 0 | The study investigates the cytotoxicity (EC50) of mercuric chloride in in vitro cell cultures, not its pharmacokinetic disposition parameters. |
| popPK | Kim_2004 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of mercury-induced cell death in murine macrophages and does not report any pharmacokinetic disposition parameters (CL, V, ka, t1/2) for mercuric chloride. |
| popPK | Lahnsteiner_2008 | irrelevant | 0 | 0 | The paper is an ecotoxicology study using mercuric chloride as a test chemical to validate a zebrafish embryo toxicity assay, reporting no pharmacokinetic parameters. |
| popPK | Leonhardt_1996 | irrelevant | 0 | 0 | This is an in vitro electrophysiology study measuring the effect of mercuric chloride on calcium channel currents, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Lewis_2023 | irrelevant | 0 | 0 | The paper studies the pharmacodynamics of a non-hallucinogenic LSD analog, not the pharmacokinetics of mercuric chloride. |
| popPK | Lin_2025 | irrelevant | 3 | 0 | The paper focuses on a PBPK model for inorganic mercury salts (iHg) in general, not specifically the pharmacokinetics of mercuric chloride, and no numeric parameter values are provided in the evidence. |
| popPK | Lomnicka_2003 | irrelevant | 0 | 0 | The study focuses on the effects of NSAIDs on renal prostanoids, with mercuric chloride used only as a toxicological comparator to diminish prostacyclin levels, rather than as the subject of a pharmacokinetic analysis. |
| popPK | Majnooni_2020 | irrelevant | 0 | 0 | The paper is a review of phytochemicals for coronavirus lung injury and contains no data on mercuric chloride. |
| popPK | Mason_1976 | irrelevant | 1 | 2 | The study investigates mercuric chloride uptake in oysters (non-mammalian invertebrates) using a two-compartment system, which is not a standard population-PK model for the drug in humans or typical mammalian species. |
| popPK | Mead_1998 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity assay measuring EC50 values in cell lines, not a pharmacokinetic study reporting disposition parameters for mercuric chloride. |
| popPK | Mirzoian_2002 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of the modulation of nicotinic acetylcholine receptors, not a pharmacokinetic study of mercuric chloride disposition. |
| popPK | Narahashi_1994 | irrelevant | 0 | 0 | The study investigates the mechanistic modulation of GABA receptors by mercuric chloride using electrophysiology in cell culture, reporting no pharmacokinetic parameters. |
| popPK | Parran_2001 | irrelevant | 0 | 0 | The paper is an in-vitro toxicity and differentiation study, not a pharmacokinetic study, and reports no disposition parameters (CL, V, etc.). |
| popPK | Pérez-Legaspi_2002 | irrelevant | 0 | 0 | The paper is an in vitro/toxicology study on rotifers measuring esterase inhibition, not a pharmacokinetic study reporting disposition parameters for mercuric chloride. |
| popPK | Reichl_1999 | irrelevant | 0 | 0 | The study is an in vitro mechanistic/toxicology study measuring gluconeogenesis inhibition, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Reichl_2001 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity assessment measuring LDH release and EC50 values, not a pharmacokinetic study reporting disposition parameters like clearance or volume of distribution. |
| popPK | Reichl_2006 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity assay measuring EC50 values for cell death, not a pharmacokinetic study reporting disposition parameters like clearance, volume, or half-life. |
| popPK | Seibert_2002 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation into protein binding effects on cytotoxic potency (EC50), not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Singh_2024 | not_relevant | 0 | 0 | The paper reports general toxicological and histological effects of HgCl2 in fish, not the impact of a specific genetic variant on a pharmacokinetic or pharmacodynamic parameter. |
| popPK | Son_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cellular cytotoxicity and kinase signaling, not a pharmacokinetic study measuring disposition parameters. |
| popPK | Subhadra_1991 | irrelevant | 0 | 0 | The study measures physiological responses (enzyme activity, growth) in plants (Lemna minor, Allium cepa) and does not report pharmacokinetic parameters. |
| popPK | de-Carvalho_2022 | irrelevant | 0 | 0 | The paper is a developmental toxicity/ecotoxicology study in snails, not a pharmacokinetic study, and does not report any PK parameters for mercuric chloride. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 22:36 UTC</sub>
