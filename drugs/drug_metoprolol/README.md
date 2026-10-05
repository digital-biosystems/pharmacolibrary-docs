<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;metoprolol&quot;}]"></div>

# metoprolol

- **generic name:** metoprolol
- **ATC codes:** `C07AB02`, `C07BB02`, `C07BB52`, `C07CB02`, `C07FB02`, `C07FB13`, `C07FX03`, `C07FX05`
- **DrugBank:** [DB00264](https://go.drugbank.com/drugs/DB00264) · **PubChem:** [CID 4171](https://pubchem.ncbi.nlm.nih.gov/compound/4171)
- **molar mass:** 267.3639 g/mol (C15H25NO3) — DrugBank
- **groups:** approved, investigational

## About

Metoprolol is a selective beta blocker used for heart conditions such as high blood pressure, angina, arrhythmias, heart failure, and after myocardial infarction. It is widely used worldwide and appears on the WHO list of essential medicines.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q409468](https://www.wikidata.org/wiki/Q409468) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| metoprolol | parent | 267.364 | C15H25NO3 | DrugBank | [4171](https://pubchem.ncbi.nlm.nih.gov/compound/4171) | Bortolotti_1989, Höcht_2006 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-29 04:33 | 13:57 | 0/1/3 | 0/0/0 | 0/0/0 | 115,004/55,766 | ollama / qwen3.8:27b-mtp-q8_0 | 14 | 2/1 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.333). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs both; the m…</sub><br><sub>route_to: `human_review`</sub> | [Höcht_2006_reference](drugs/drug_metoprolol/Metoprolol_Hcht2006_reference.md) | — | 1-compartment (no model) | 1 | Höcht C et al., Pharmacokinetic-pharmacodynamic (PK-PD)…, Naunyn-Schmiedeberg's archi… (2006) | [10.1007/s00210-006-0078-x](https://doi.org/10.1007/s00210-006-0078-x) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span><br><sub>blocking: T1_cmax</sub><br><sub>blocking: T1_tmax</sub><br><sub>route_to: `scholar`</sub> | [Kir_2025_reference](drugs/drug_metoprolol/Metoprolol_Kir2025_reference.md) | — | 1-compartment (no model) | 3 | Kir F et al., Minimal Physiologically-Based Pharmacok…, European journal of drug me… (2025) | [10.1007/s13318-025-00943-6](https://doi.org/10.1007/s13318-025-00943-6) |
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.364). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: model_quarantined: Cl, Vd, ka, Tlag left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Taguchi_2004_reference](drugs/drug_metoprolol/Metoprolol_Taguchi2004_reference.md) | held back | 1-compartment, oral | 4 | Taguchi M et al., Nonlinear mixed effects model analysis…, Biological & pharmaceutical… (2004) | [10.1248/bpb.27.1642](https://doi.org/10.1248/bpb.27.1642) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.111). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rabbit</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Bortolotti_1989_reference](drugs/drug_metoprolol/Metoprolol_Bortolotti1989_reference.md) | — | 1-compartment (no model) | 6 | Bortolotti A et al., Pharmacokinetic and pharmacodynamic mod…, European journal of drug me… (1989) | [10.1007/BF03190855](https://doi.org/10.1007/BF03190855) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=metoprolol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` inhibitor/substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | kidney | `SLC22A2` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ADRB1 (inhibitor), ADRB1 (target), ADRB2 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 104 matched, 20 returned
- **screened:** 6  ·  **relevant:** 6
- **records:** 4  ·  extracted 0  ·  needs_review 3  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_11 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bortolotti_1989.pdf` | Bortolotti A et al., Pharmacokinetic and pharmacodynamic mod…, European journal of drug me… (1989) | popPK | 10 | [10.1007/BF03190855](https://doi.org/10.1007/BF03190855) | [2591419](https://pubmed.ncbi.nlm.nih.gov/2591419) | The study reports quantitative pharmacokinetic parameters (clearance, half-life, MRT, AUC, k10) for metoprolol in rabbits, with all numeric values explicitly present in the text. |
| `De_2017.pdf` | De Thaye E et al., Pharmacokinetic analysis of modified-re…, European journal of pharmac… (2017) | popPK | 10 | [10.1016/j.ejps.2016.10.039](https://doi.org/10.1016/j.ejps.2016.10.039) | [27816630](https://pubmed.ncbi.nlm.nih.gov/27816630) | The paper describes a population PK study for metoprolol in animals, but the provided evidence contains only the abstract/methodology description without any specific numeric parameter values (CL, V, ka, etc.). |
| `Luethy_2022.pdf` | Luethy D et al., Pharmacokinetics and pharmacodynamics o…, Journal of veterinary pharm… (2022) | popPK | 10 | [10.1111/jvp.13037](https://doi.org/10.1111/jvp.13037) | [34913168](https://pubmed.ncbi.nlm.nih.gov/34913168) | The paper studies metoprolol as the subject drug in horses and explicitly reports numeric PK parameters in the full text. |
| `Isbister_2016.pdf` | Isbister GK et al., Zero-order metoprolol pharmacokinetics…, Clinical toxicology (Philad… (2016) | popPK | 9 | [10.1080/15563650.2016.1209768](https://doi.org/10.1080/15563650.2016.1209768) | [27442605](https://pubmed.ncbi.nlm.nih.gov/27442605) | The paper reports specific quantitative pharmacokinetic parameters (V, Vm, Km, half-life) for metoprolol derived from a compartmental model analysis of a case study. |
| `Qian_2024.pdf` | Qian J et al., Study on genotype and phenotype of nove…, The pharmacogenomics journal (2024) | popPK | 9 | [10.1038/s41397-024-00332-3](https://doi.org/10.1038/s41397-024-00332-3) | [38637522](https://pubmed.ncbi.nlm.nih.gov/38637522) | The study is a PK/PD investigation of metoprolol in humans, but the evidence only provides qualitative descriptions (e.g., "increased by 2-3 times") without specific numeric values for clearance, volume, or half-life. |
| `Yin_1997_2.pdf` | Yin XX et al., [Pharmacokinetic-pharmacodynamic modeli…, Yao xue xue bao = Acta phar… (1997) | popPK | 9 | not captured | [11596322](https://pubmed.ncbi.nlm.nih.gov/11596322) | The study reports quantitative PK parameters (Vd/F, CLs/F) for metoprolol in dogs, but the specific numeric values are not present in the provided evidence text. |
| `Fukao_2014.pdf` | Fukao M et al., Variability of bioavailability and inte…, Drug metabolism and pharmac… (2014) | popPK | 8 | [10.2133/dmpk.dmpk-13-rg-057](https://doi.org/10.2133/dmpk.dmpk-13-rg-057) | [24025984](https://pubmed.ncbi.nlm.nih.gov/24025984) | The study reports a population PK analysis of metoprolol, but the specific numeric parameter values are not present in the provided evidence. |
| `Höcht_2004.pdf` | Höcht C et al., Pharmacokinetic-pharmacodynamic propert…, Naunyn-Schmiedeberg's archi… (2004) | popPK | 8 | [10.1007/s00210-004-0945-2](https://doi.org/10.1007/s00210-004-0945-2) | [15300360](https://pubmed.ncbi.nlm.nih.gov/15300360) | The study is a pharmacokinetic study of metoprolol in rats, but the specific numeric PK parameter values (CL, V, etc.) are not present in the provided evidence, only qualitative statements and PD parameters. |
| `Höcht_2006.pdf` | Höcht C et al., Pharmacokinetic-pharmacodynamic (PK-PD)…, Naunyn-Schmiedeberg's archi… (2006) | popPK | 8 | [10.1007/s00210-006-0078-x](https://doi.org/10.1007/s00210-006-0078-x) | [16733693](https://pubmed.ncbi.nlm.nih.gov/16733693) | The study reports quantitative PK parameters (Volume of Distribution) for metoprolol in rats, with specific numeric values provided in the text. |
| `Ritchie_1998.pdf` | Ritchie RH et al., Myocardial effect compartment modeling…, Journal of pharmaceutical s… (1998) | popPK | 8 | [10.1021/js9702776](https://doi.org/10.1021/js9702776) | [9519150](https://pubmed.ncbi.nlm.nih.gov/9519150) | The paper describes a compartmental PK/PD model for metoprolol, but the specific numeric parameter values (clearance, volume, rate constants) are not present in the provided abstract text. |
| `Yin_1997.pdf` | Yin XX et al., Pharmacokinetic-pharmacodynamic modelin…, Zhongguo yao li xue bao = A… (1997) | popPK | 8 | not captured | [10072957](https://pubmed.ncbi.nlm.nih.gov/10072957) | The paper is a PK-PD study of metoprolol stereoisomers in rats, but the specific numeric parameter values are not present in the provided evidence. |

<sub>queue written 2026-09-29T04:20:10.502157+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bundkirchen_2001 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro investigation of cardiac calcium sensitivity and does not report any pharmacokinetic parameters for metoprolol. |
| PD | Bundkirchen_2001 | not_relevant | 0 | 0 | The study investigates direct pharmacological effects on cardiac muscle mechanics (Ca2+ sensitivity) in isolated preparations, not the systemic pharmacodynamic exposure-response relationship of the drug in vivo. |
| popPK | De_2017 | relevant | 10 | 0 | The paper describes a population PK study for metoprolol in animals, but the provided evidence contains only the abstract/methodology description without any specific numeric parameter values (CL, V, ka, etc.). |
| popPK | Di_2008 | irrelevant | 2 | 0 | The study focuses on pharmacodynamics (Emax, IC50) and receptor binding, and while it mentions PK modeling, no quantitative PK parameters (CL, V, ka) are reported in the evidence. |
| popPK | Fukao_2014 | relevant | 8 | 0 | The study reports a population PK analysis of metoprolol, but the specific numeric parameter values are not present in the provided evidence. |
| popPK | Ghazi_2022 | irrelevant | 1 | 1 | Metoprolol is only a treatment comparator in a hypertension outcomes study, and no metoprolol PK parameters are reported. |
| popPK | Höcht_2004 | relevant | 8 | 0 | The study is a pharmacokinetic study of metoprolol in rats, but the specific numeric PK parameter values (CL, V, etc.) are not present in the provided evidence, only qualitative statements and PD parameters. |
| popPK | Höcht_2005 | irrelevant | 2 | 0 | The study is a PK-PD modeling paper in rats that reports pharmacodynamic parameters (Emax) but does not provide quantitative pharmacokinetic disposition parameters (CL, V, ka) for metoprolol in the evidence. |
| popPK | Jankovic_2014 | irrelevant | 2 | 0 | The paper is a review article discussing pharmacokinetics of beta-blockers generally and does not provide original quantitative parameter values for metoprolol in the provided text. |
| popPK | Momčilović_2019 | irrelevant | 0 | 0 | The study focuses on the population pharmacokinetics of bisoprolol, not metoprolol, which is only mentioned as a comparator in the introduction. |
| popPK | Qian_2024 | relevant | 9 | 2 | The study is a PK/PD investigation of metoprolol in humans, but the evidence only provides qualitative descriptions (e.g., "increased by 2-3 times") without specific numeric values for clearance, volume, or half-life. |
| popPK | Ritchie_1998 | relevant | 8 | 2 | The paper describes a compartmental PK/PD model for metoprolol, but the specific numeric parameter values (clearance, volume, rate constants) are not present in the provided abstract text. |
| popPK | Yin_1997 | relevant | 8 | 0 | The paper is a PK-PD study of metoprolol stereoisomers in rats, but the specific numeric parameter values are not present in the provided evidence. |
| popPK | Yin_1997_2 | relevant | 9 | 2 | The study reports quantitative PK parameters (Vd/F, CLs/F) for metoprolol in dogs, but the specific numeric values are not present in the provided evidence text. |
| popPK | Zhao_2016 | irrelevant | 2 | 0 | The study is a formulation development paper for a combination drug (felodipine/metoprolol) in dogs, and the specific numeric PK parameters are not present in the provided evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-29 04:20 UTC</sub>
