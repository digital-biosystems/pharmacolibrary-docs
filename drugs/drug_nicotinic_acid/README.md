<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C04A&quot;,&quot;href&quot;:&quot;atc/C04A.md&quot;},{&quot;label&quot;:&quot;nicotinic acid&quot;}]"></div>

# nicotinic acid

- **generic name:** nicotinic acid
- **ATC codes:** `C04AC01`, `C10AD02`, `C10BA01`
- **DrugBank:** [DB00627](https://go.drugbank.com/drugs/DB00627) · **PubChem:** [CID 938](https://pubchem.ncbi.nlm.nih.gov/compound/938)
- **molar mass:** 123.1094 g/mol (C6H5NO2) — DrugBank
- **groups:** approved, investigational, nutraceutical

## About

Nicotinic acid, the acid form of vitamin B3, is used to treat pellagra and familial hyperlipidemia, and acts as a lipid-lowering agent and peripheral vasodilator. It is an approved medicine and nutraceutical, widely available as a vitamin supplement and lipid-modifying drug, though no EU-wide marketing authorisation is recorded.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q134658](https://www.wikidata.org/wiki/Q134658) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| nicotinic acid (nicotinic_acid) | parent | 123.109 | C6H5NO2 | DrugBank | [938](https://pubchem.ncbi.nlm.nih.gov/compound/938) | Iwaki_1996, Wu_1989 |
| nicotinuric acid | metabolite | 180.163 | C8H8N2O3 | PubChem | [68499](https://pubchem.ncbi.nlm.nih.gov/compound/68499) | Iwaki_1996 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 20:46 | 17:49 | 0/0/2 | 1/0/1 | 0/0/0 | 297,121/49,547 | ollama / qwen3.8:27b-mtp-q8_0 | 8 | 2/6 | 8/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.143). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>route_to: `human_review`</sub> | [Iwaki_1996_reference](drugs/drug_nicotinic_acid/NicotinicAcid_Iwaki1996_reference.md) | — | parent + metabolite (no model) | 3 | Iwaki M et al., Acute dose-dependent disposition studie…, Drug metabolism and disposi… (1996) | — |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.222). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rabbit</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>route_to: `human_review`</sub> | [Wu_1989_reference](drugs/drug_nicotinic_acid/NicotinicAcid_Wu1989_reference.md) | — | 1-compartment (no model) | 4 | Wu Y et al., [Determination of aspirin and nicotinic…, Yao xue xue bao = Acta phar… (1989) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Andersson_2017_FFA](drugs/drug_nicotinic_acid/pd_Andersson_2017_FFA.md) | FFA ← NiAc · indirect response — drug inhibits the loss of FFA | — | Andersson R et al., Modeling of free fatty acid dynamics: i…, Journal of pharmacokinetics… (2017) | [10.1007/s10928-017-9512-6](https://doi.org/10.1007/s10928-017-9512-6) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Andersson_2017_insulin](drugs/drug_nicotinic_acid/pd_Andersson_2017_insulin.md) | insulin ← NiAc · indirect response — drug inhibits the loss of insulin | — | Andersson R et al., Modeling of free fatty acid dynamics: i…, Journal of pharmacokinetics… (2017) | [10.1007/s10928-017-9512-6](https://doi.org/10.1007/s10928-017-9512-6) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Andersson_2016_FFA](drugs/drug_nicotinic_acid/pd_Andersson_2016_FFA.md) | FFA ← nicotinic_acid · indirect response — drug inhibits the production of FFA | — | Andersson R et al., Dose-response-time modelling: Second-ge…, European journal of pharmac… (2016) | [10.1016/j.ejps.2015.10.018](https://doi.org/10.1016/j.ejps.2015.10.018) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=nicotinic_acid) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | kidney | `SLC22A5` inhibitor | DrugBank actor |
| absorption | liver | `SLCO2B1` inhibitor | DrugBank actor |
| absorption | skeletal muscle | `SLC22A5` inhibitor | DrugBank actor |
| absorption | small intestine | `SLC22A5` inhibitor, `SLCO2B1` inhibitor | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP2D6` inhibitor, `CYP2E1` inhibitor, `CYP3A4` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: DGAT2 (inhibitor), HCAR2 (target), HCAR3 (target), NNMT (binder), QPRT (binder), SERPINA7 (inhibitor), SLC16A1 (substrate), SLC16A3 (unknown), SLC5A8 (unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 42 matched, 20 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 2  ·  extracted 0  ·  needs_review 2  ·  rejected 0  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Iwaki_1996.pdf` | Iwaki M et al., Acute dose-dependent disposition studie…, Drug metabolism and disposi… (1996) | popPK | 10 | not captured | [8818575](https://pubmed.ncbi.nlm.nih.gov/8818575) | The study reports quantitative PK parameters (clearance, volume of distribution, model fit) for nicotinic acid in rats, with specific numeric values for urinary excretion ratios and protein binding provided in the text. |
| `Wu_1989.pdf` | Wu Y et al., [Determination of aspirin and nicotinic…, Yao xue xue bao = Acta phar… (1989) | popPK | 9 | not captured | [2609979](https://pubmed.ncbi.nlm.nih.gov/2609979) | The study reports quantitative PK parameters (T1/2, AUC) for nicotinic acid in a two-compartment model, though specific clearance and volume values are not explicitly listed in the text. |
| `Ahlström_2013.pdf` | Ahlström C et al., Challenges of a mechanistic feedback mo…, Journal of pharmacokinetics… (2013) | popPK | 8 | [10.1007/s10928-013-9325-1](https://doi.org/10.1007/s10928-013-9325-1) | [23824920](https://pubmed.ncbi.nlm.nih.gov/23824920) | The study reports a compartmental PK model for nicotinic acid in rats, but the specific numeric values for clearance, volume, or half-life are not explicitly listed in the provided text, only mechanistic parameters like IC50 and turnover rates. |

<sub>queue written 2026-10-06T20:30:43.620052+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahlström_2013 | relevant | 8 | 2 | The study reports a compartmental PK model for nicotinic acid in rats, but the specific numeric values for clearance, volume, or half-life are not explicitly listed in the provided text, only mechanistic parameters like IC50 and turnover rates. |
| popPK | Andersson_2016 | irrelevant | 2 | 0 | The study is a pharmacodynamic (DRT) analysis of free fatty acids where nicotinic acid exposure data was intentionally excluded, and no quantitative PK parameters (CL, V, etc.) for nicotinic acid are reported in the text. |
| popPK | Andersson_2017 | irrelevant | 2 | 1 | The study focuses on pharmacodynamic modeling of free fatty acid dynamics and insulin resistance in rats, not on the quantitative pharmacokinetic disposition parameters (CL, V, ka) of nicotinic acid itself. |
| popPK | Andersson_2019 | irrelevant | 2 | 0 | The study focuses on pharmacodynamic dose-response-time modeling of nicotinic acid's effect on free fatty acids and insulin, explicitly noting the lack of exposure (PK) data, and does not report quantitative PK parameters like clearance or volume. |
| popPK | Blum_1977 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of HDL (apolipoproteins) in humans, using nicotinic acid only as a dietary perturbation to observe effects on HDL metabolism, not as the subject drug. |
| popPK | Croyal_2015 | irrelevant | 0 | 0 | The study measures the kinetics of apolipoprotein (a) and lipoproteins, not the pharmacokinetic parameters (CL, V, ka) of nicotinic acid itself. |
| popPK | Dal_1991 | irrelevant | 0 | 0 | The study is an in-vitro permeation study of nicotinic acid derivatives, not a pharmacokinetic study reporting disposition parameters for nicotinic acid in vivo. |
| popPK | Jeong_2020 | irrelevant | 0 | 0 | The study focuses on a 5-ASA codrug (ASA-azo-NA) and its anticolitic effects, with nicotinic acid serving only as a structural component/GPR109A agonist rather than the subject of a pharmacokinetic parameter analysis. |
| popPK | Jurutka_2021 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on RXR agonists (bexarotene and NEt-4IB analogs) and does not report pharmacokinetic parameters for nicotinic acid. |
| popPK | Le_2015 | irrelevant | 2 | 0 | The study measures HDL cholesteryl ester and apolipoprotein AI turnover kinetics in dogs, not the pharmacokinetic disposition parameters (CL, V, ka) of nicotinic acid itself. |
| popPK | Leander_2015 | relevant | 9 | 2 | The paper presents a population PK model for nicotinic acid in rats, but the specific numeric parameter estimates are not listed in the provided text (likely in tables or figures not included). |
| popPK | Trabbic_2015 | irrelevant | 0 | 0 | The study investigates the receptor binding and calcium release properties of NAADP analogues, not the pharmacokinetics of nicotinic acid. |
| popPK | Vasudevan_2008 | irrelevant | 0 | 0 | The paper describes a biochemical enzyme (NAADP synthase) in sea urchin sperm and does not report pharmacokinetic parameters for nicotinic acid. |
| popPK | Williams_2002 | irrelevant | 0 | 0 | The paper is a review of pharmacokinetic interactions involving statins, and nicotinic acid is only mentioned as a co-administered drug associated with pharmacodynamic myopathy risk, with no PK parameters reported for it. |
| popPK | Wu_2022 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on the synthesis and fungicidal activity of nicotinamide derivatives, containing no pharmacokinetic data for nicotinic acid. |
| popPK | Zandi-Nejad_2013 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of macrophage function and does not report pharmacokinetic disposition parameters for nicotinic acid. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 20:31 UTC</sub>
