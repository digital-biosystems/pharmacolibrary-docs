<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01D&quot;,&quot;href&quot;:&quot;atc/L01D.md&quot;},{&quot;label&quot;:&quot;epirubicin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Epirubicin_Robert1994_reference&quot;,&quot;label&quot;:&quot;Robert_1994_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_epirubicin/Epirubicin_Robert1994_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# epirubicin

- **generic name:** epirubicin
- **ATC codes:** `L01DB03`
- **DrugBank:** [DB00445](https://go.drugbank.com/drugs/DB00445) · **PubChem:** [CID 41867](https://pubchem.ncbi.nlm.nih.gov/compound/41867)
- **molar mass:** 543.5193 g/mol (C27H29NO11) — DrugBank
- **groups:** approved, investigational

## About

Epirubicin is an anthracycline anticancer drug used to treat cancers such as breast cancer, invasive ductal carcinoma, and gastric adenocarcinoma. It is an approved medicine and is widely used in cancer chemotherapy.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q425122](https://www.wikidata.org/wiki/Q425122) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| epirubicin | parent | 543.519 | C27H29NO11 | DrugBank | [41867](https://pubchem.ncbi.nlm.nih.gov/compound/41867) | Robert_1994, Sandström_1999, Tjuljandin_1990, Wade_1992 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 17:59 | 8:53 | 1/4/2 | 4/0/0 | 0/0/0 | 162,537/47,135 | openai / gpt-6-luna | 5 | 1/4 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Robert_1994_reference](drugs/drug_epirubicin/Epirubicin_Robert1994_reference.md) | ▶ model + simulator | 1-compartment, IV | 3 | Robert J, Clinical pharmacokinetics of epirubicin, Clinical pharmacokinetics (1994) | [10.2165/00003088-199426060-00002](https://doi.org/10.2165/00003088-199426060-00002) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Sandström_1999_reference](drugs/drug_epirubicin/Epirubicin_Sandstrm1999_reference.md) | — | 1-compartment (no model) | 2 | Sandström M et al., The pharmacokinetics of epirubicin and…, Cancer chemotherapy and pha… (1999) | [10.1007/s002800051120](https://doi.org/10.1007/s002800051120) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Wade_1992_reference](drugs/drug_epirubicin/Epirubicin_Wade1992_reference.md) | — | 1-compartment (no model) | 1 | Wade JR et al., Variability in the pharmacokinetics of…, Cancer chemotherapy and pha… (1992) | [10.1007/BF00686009](https://doi.org/10.1007/BF00686009) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Janssen_2021_reference](drugs/drug_epirubicin/Epirubicin_Janssen2021_reference.md) | — | 1-compartment (no model) | 0 | Janssen JM et al., Population Pharmacokinetics of Docetaxe…, Clinical pharmacokinetics (2021) | [10.1007/s40262-020-00961-4](https://doi.org/10.1007/s40262-020-00961-4) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Janssen_2023_reference](drugs/drug_epirubicin/Epirubicin_Janssen2023_reference.md) | — | 1-compartment (no model) | 0 | Janssen JM et al., Semi-physiological Enriched Population…, Clinical pharmacokinetics (2023) | [10.1007/s40262-023-01263-1](https://doi.org/10.1007/s40262-023-01263-1) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Ralph_2003_reference](drugs/drug_epirubicin/Epirubicin_Ralph2003_reference.md) | — | 1-compartment (no model) | 0 | Ralph LD et al., A population model of epirubicin pharma…, Cancer chemotherapy and pha… (2003) | [10.1007/s00280-003-0608-x](https://doi.org/10.1007/s00280-003-0608-x) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Tjuljandin_1990_reference](drugs/drug_epirubicin/Epirubicin_Tjuljandin1990_reference.md) | — | 1-compartment (no model) | 4 | Tjuljandin SA et al., Pharmacokinetics and toxicity of two sc…, Cancer research (1990) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Bozza_2021_CI](drugs/drug_epirubicin/pd_Bozza_2021_CI.md) | cellular index ← epirubicin · direct sigmoid Emax (Hill) effect | — | Bozza WP et al., Anthracycline-Induced Cardiotoxicity: M…, The AAPS journal (2021) | [10.1208/s12248-021-00576-y](https://doi.org/10.1208/s12248-021-00576-y) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Hénin_2016_neutrophil_kinetics](drugs/drug_epirubicin/pd_H_nin_2016_neutrophil_kinetics.md) | neutrophil kinetics biomarker turnover ← docetaxel plus epirubicin | — | Hénin E et al., Revisiting dosing regimen using PK/PD m…, Breast cancer research and… (2016) | [10.1007/s10549-016-3760-9](https://doi.org/10.1007/s10549-016-3760-9) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Meille_2016_ANC](drugs/drug_epirubicin/pd_Meille_2016_ANC.md) | absolute neutrophil count ← epirubicin · model not identified | — | Meille C et al., Revisiting Dosing Regimen Using Pharmac…, Clinical pharmacokinetics (2016) | [10.1007/s40262-016-0374-7](https://doi.org/10.1007/s40262-016-0374-7) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Meille_2016_average_tumor_mass](drugs/drug_epirubicin/pd_Meille_2016_average_tumor_mass.md) | average tumor mass ← epirubicin · model not identified | — | Meille C et al., Revisiting Dosing Regimen Using Pharmac…, Clinical pharmacokinetics (2016) | [10.1007/s40262-016-0374-7](https://doi.org/10.1007/s40262-016-0374-7) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Tavener_2021_cell_viability](drugs/drug_epirubicin/pd_Tavener_2021_cell_viability.md) | cell viability ← epirubicin · inhibition effect | — | Tavener AM et al., Anthracycline-induced cytotoxicity in t…, Molecular biology reports (2021) | [10.1007/s11033-020-06109-8](https://doi.org/10.1007/s11033-020-06109-8) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=epirubicin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood-brain barrier | `ABCC1` substrate | DrugBank actor |
| distribution | lung | `ABCC1` substrate | DrugBank actor |
| metabolism | blood | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | kidney | `UGT2B7` substrate | DrugBank actor |
| metabolism | liver | `UGT2B7` substrate | DrugBank actor |
| metabolism | small intestine | `UGT2B7` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: DNA (intercalation), PLA2G4A (inhibitor), TOP2A (inhibitor), TOP2B (modulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 47 matched, 20 returned
- **screened:** 9  ·  **relevant:** 9
- **records:** 7  ·  extracted 1  ·  needs_review 2  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_11 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ralph_2003.pdf` | Ralph LD et al., A population model of epirubicin pharma…, Cancer chemotherapy and pha… (2003) | popPK | 10 | [10.1007/s00280-003-0608-x](https://doi.org/10.1007/s00280-003-0608-x) | [12764671](https://pubmed.ncbi.nlm.nih.gov/12764671) | Human population-PK model reports numeric epirubicin clearance values and a covariate model. |
| `Ralph_2006.pdf` | Ralph LD et al., Assessment of the validity of a populat…, British journal of clinical… (2006) | popPK | 10 | [10.1111/j.1365-2125.2006.02584.x](https://doi.org/10.1111/j.1365-2125.2006.02584.x) | [16842378](https://pubmed.ncbi.nlm.nih.gov/16842378) | This evaluates an epirubicin population-PK model, but its actual numeric parameter values are not provided in the evidence. |
| `Sandström_1999.pdf` | Sandström M et al., The pharmacokinetics of epirubicin and…, Cancer chemotherapy and pha… (1999) | popPK | 10 | [10.1007/s002800051120](https://doi.org/10.1007/s002800051120) | [10550567](https://pubmed.ncbi.nlm.nih.gov/10550567) | The rat study reports numeric epirubicin clearance, intercompartmental clearances, and distribution volumes. |
| `Wade_1992.pdf` | Wade JR et al., Variability in the pharmacokinetics of…, Cancer chemotherapy and pha… (1992) | popPK | 10 | [10.1007/BF00686009](https://doi.org/10.1007/BF00686009) | [1551178](https://pubmed.ncbi.nlm.nih.gov/1551178) | Human population-PK study reports numeric epirubicin clearance values. |
| `Danesi_2002.pdf` | Danesi R et al., Pharmacokinetics and pharmacodynamics o…, British journal of clinical… (2002) | popPK | 9 | [10.1046/j.1365-2125.2002.01579.x](https://doi.org/10.1046/j.1365-2125.2002.01579.x) | [11994057](https://pubmed.ncbi.nlm.nih.gov/11994057) | Human epirubicin clearance and AUC values are reported numerically in the evidence. |
| `Prado_2011.pdf` | Prado CM et al., An exploratory study of body compositio…, Cancer chemotherapy and pha… (2011) | popPK | 9 | [10.1007/s00280-010-1288-y](https://doi.org/10.1007/s00280-010-1288-y) | [20204364](https://pubmed.ncbi.nlm.nih.gov/20204364) | Human epirubicin population-PK analysis is described, but no numeric clearance or model parameter values are provided. |
| `Robert_1994.pdf` | Robert J, Clinical pharmacokinetics of epirubicin, Clinical pharmacokinetics (1994) | popPK | 9 | [10.2165/00003088-199426060-00002](https://doi.org/10.2165/00003088-199426060-00002) | [8070217](https://pubmed.ncbi.nlm.nih.gov/8070217) | Reports readable three-compartment parameters, clearance, and steady-state volume for epirubicin. |
| `Tjuljandin_1990.pdf` | Tjuljandin SA et al., Pharmacokinetics and toxicity of two sc…, Cancer research (1990) | popPK | 9 | not captured | [2379173](https://pubmed.ncbi.nlm.nih.gov/2379173) | Human study reports a two-compartment model and numeric half-lives and plasma concentrations. |
| `Fogli_2002.pdf` | Fogli S et al., Gemcitabine, epirubicin and paclitaxel:…, Annals of oncology : offici… (2002) | popPK | 8 | [10.1093/annonc/mdf164](https://doi.org/10.1093/annonc/mdf164) | [12123338](https://pubmed.ncbi.nlm.nih.gov/12123338) | Human epirubicin PK is studied, with numeric epirubicinol AUCs and renal-clearance changes, but no absolute clearance values are shown. |
| `Zhang_2017.pdf` | Zhang Y et al., Assessment of pharmacokinetic interacti…, British journal of clinical… (2017) | popPK | 8 | [10.1111/bcp.13179](https://doi.org/10.1111/bcp.13179) | [27966237](https://pubmed.ncbi.nlm.nih.gov/27966237) | Epirubicin PK was assessed by NCA, but no numeric disposition parameter values are shown in the supplied evidence. |
| `Meille_2016.pdf` | Meille C et al., Revisiting Dosing Regimen Using Pharmac…, Clinical pharmacokinetics (2016) | popPK | 7 | [10.1007/s40262-016-0374-7](https://doi.org/10.1007/s40262-016-0374-7) | [26946136](https://pubmed.ncbi.nlm.nih.gov/26946136) | The study models epirubicin-containing therapy, but no numeric disposition parameters are present in the provided evidence. |

<sub>queue written 2026-10-06T17:52:17.591066+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bozza_2021 | irrelevant | 0 | 0 | This in-vitro cardiotoxicity study reports epirubicin EC50, not quantitative pharmacokinetic disposition parameters. |
| popPK | Danesi_1999 | irrelevant | 1 | 1 | This review reports epirubicinol AUC values but no quantitative disposition parameters or model for epirubicin. |
| popPK | Doshi_2015 | irrelevant | 1 | 0 | The study models rilotumumab exposure-response; epirubicin is only part of the co-administered ECX regimen, with no epirubicin PK values reported. |
| popPK | Hénin_2016 | irrelevant | 0 | 0 | The evidence describes toxicity and neutrophil-kinetics modeling but reports no epirubicin disposition parameters. |
| popPK | Meille_2016 | relevant | 7 | 0 | The study models epirubicin-containing therapy, but no numeric disposition parameters are present in the provided evidence. |
| popPK | Prado_2011 | relevant | 9 | 1 | Human epirubicin population-PK analysis is described, but no numeric clearance or model parameter values are provided. |
| popPK | Ralph_2006 | relevant | 10 | 1 | This evaluates an epirubicin population-PK model, but its actual numeric parameter values are not provided in the evidence. |
| popPK | Tavener_2021 | irrelevant | 0 | 0 | This in-vitro cytotoxicity study reports epirubicin EC50, not quantitative pharmacokinetic disposition parameters. |
| popPK | Testart-Paillet_2007 | irrelevant | 0 | 0 | This is a review of hematological-toxicity models and provides no quantitative epirubicin disposition parameters. |
| popPK | Zhang_2017 | relevant | 8 | 1 | Epirubicin PK was assessed by NCA, but no numeric disposition parameter values are shown in the supplied evidence. |
| popPK | Zhu_2015 | irrelevant | 0 | 0 | The pharmacokinetic model and disposition values are for rilotumumab, not epirubicin. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 17:54 UTC</sub>
