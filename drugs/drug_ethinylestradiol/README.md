<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G03A&quot;,&quot;href&quot;:&quot;atc/G03A.md&quot;},{&quot;label&quot;:&quot;ethinylestradiol&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ethinylestradiol_Trujillode2014_reference&quot;,&quot;label&quot;:&quot;Trujillo-de_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ethinylestradiol/Ethinylestradiol_Trujillode2014_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# ethinylestradiol

- **generic name:** ethinylestradiol
- **ATC codes:** `G03AA01`, `G03AA02`, `G03AA03`, `G03AA04`, `G03AA05`, `G03AA06`, `G03AA07`, `G03AA08`, `G03AA09`, `G03AA10`, `G03AA11`, `G03AA12`, `G03AA13`, `G03AA15`, `G03AA16`, `G03AB01`, `G03AB02`, `G03AB03`, `G03AB04`, `G03AB05`, `G03AB06`, `G03AB07`, `G03AB09`, `G03CA01`, `L02AA03`
- **DrugBank:** [DB00977](https://go.drugbank.com/drugs/DB00977) · **PubChem:** [CID 5991](https://pubchem.ncbi.nlm.nih.gov/compound/5991)
- **molar mass:** 296.4034 g/mol (C20H24O2) — DrugBank
- **groups:** approved, investigational

## About

Ethinylestradiol is an estrogen used mainly in combined birth control pills, and has also been used for hormone-related conditions such as menopausal problems, hypogonadism, and certain cancers. It is widely used around the world in fixed and sequential combinations with progestogens for hormonal contraception.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q415563](https://www.wikidata.org/wiki/Q415563) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ethinylestradiol | parent | 296.403 | C20H24O2 | DrugBank | [5991](https://pubchem.ncbi.nlm.nih.gov/compound/5991) | Reif_2013 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:00 | 2:47 | 1/1/0 | 0/0/1 | 0/0/0 | 178,434/11,701 | einfracz / qwen3.8-27b | 5 | 0/5 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Trujillo-de_2014_reference](drugs/drug_ethinylestradiol/Ethinylestradiol_Trujillode2014_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Trujillo-de Santiago G et al., Mathematical modeling of the release of…, Iranian journal of pharmace… (2014) | — |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>blocking: C2 negative clearance/volume in a covariate scenario or base (implausible — bas…</sub><br><sub>route_to: `human_review`</sub> | [Reif_2013_reference](drugs/drug_ethinylestradiol/Ethinylestradiol_Reif2013_reference.md) | — | 1-compartment (no model) | 9 | Reif S et al., Characterisation of the pharmacokinetic…, The journal of family plann… (2013) | [10.1136/jfprhc-2012-100397](https://doi.org/10.1136/jfprhc-2012-100397) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">fish</span> | [Rose_2002_Vtg](drugs/drug_ethinylestradiol/pd_Rose_2002_Vtg.md) | vitellogenin (Vtg) ← 17alpha-ethinylestradiol · categorical (graded) response model | — | Rose J et al., Vitellogenin induction by 17beta-estrad…, Comparative biochemistry an… (2002) | [10.1016/s1532-0456(02)00035-2](https://doi.org/10.1016/s1532-0456(02)00035-2) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ethinylestradiol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate, `SLCO1A2` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate, `SLCO1A2` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | brain | `COMT` substrate | DrugBank actor |
| metabolism | kidney | `COMT` substrate, `CYP3A5` substrate, `UGT1A9` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | liver | `COMT` substrate, `CYP1A2` substrate, `CYP2C19` inhibitor, `CYP2C8` inhibitor/substrate, `CYP2C9` substrate, `CYP3A4` substrate, `CYP3A5` substrate, `SLC10A1` inhibitor, `SULT1E1` substrate, `UGT1A1` inducer/substrate, `UGT1A3` unknown, `UGT1A4` substrate, `UGT1A9` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` substrate, `UGT1A1` inducer/substrate, `UGT2B7` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `ABCC2` inducer/inhibitor | DrugBank actor |
| excretion | liver | `ABCB11` inhibitor, `ABCC2` inducer/inhibitor | DrugBank actor |
| excretion | small intestine | `ABCC2` inducer/inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ESR1 (target), NR1I2 (target), SHBG (binder), SULT1A3 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 35 matched, 20 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Fernández_1998.pdf` | Fernández N et al., Influence of two commercial fibers in t…, The Journal of pharmacology… (1998) | popPK | 10 | not captured | [9694944](https://pubmed.ncbi.nlm.nih.gov/9694944) | The study is a relevant PK analysis of ethinylestradiol in rabbits, but the specific numeric parameter values are not listed in the provided text evidence. |
| `Stanczyk_1983.pdf` | Stanczyk FZ et al., Plasma levels and pharmacokinetics of n…, Contraception (1983) | popPK | 10 | [10.1016/0010-7824(83)90065-3](https://doi.org/10.1016/0010-7824(83)90065-3) | [6641224](https://pubmed.ncbi.nlm.nih.gov/6641224) | The study reports pharmacokinetic parameters for ethinylestradiol in a two-compartment model, but the specific numeric values are not present in the provided evidence text. |
| `Fernández_1997.pdf` | Fernández N et al., Study of the pharmacokinetic interactio…, Contraception (1997) | popPK | 8 | [10.1016/s0010-7824(96)00253-3](https://doi.org/10.1016/s0010-7824(96)00253-3) | [9013061](https://pubmed.ncbi.nlm.nih.gov/9013061) | The study reports that pharmacokinetic parameters were unchanged but does not provide the specific numeric values for clearance, volume, or half-life for ethinylestradiol in the evidence. |

<sub>queue written 2026-10-07T08:58:59.264568+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cvetkovic_2003 | irrelevant | 0 | 0 | The paper is a review of lopinavir/ritonavir, and ethinylestradiol is mentioned only as a contraindicated interacting drug, with no pharmacokinetic parameters reported for it. |
| popPK | Duft_2007 | irrelevant | 0 | 0 | The paper is an ecotoxicological review of endocrine effects (imposex, reproduction) in snails, not a pharmacokinetic study, and provides no PK parameters for ethinylestradiol. |
| popPK | Fernández_1997 | irrelevant | 8 | 0 | The study reports that pharmacokinetic parameters were unchanged but does not provide the specific numeric values for clearance, volume, or half-life for ethinylestradiol in the evidence. |
| popPK | Fernández_1998 | relevant | 10 | 1 | The study is a relevant PK analysis of ethinylestradiol in rabbits, but the specific numeric parameter values are not listed in the provided text evidence. |
| popPK | Fetter_2015 | irrelevant | 0 | 0 | The study is a toxicological/gene expression analysis in zebrafish where ethinylestradiol is used only as a comparative steroidal hormone, not as the subject of a pharmacokinetic parameter estimation. |
| popPK | Hofmann_2020 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of levonorgestrel (LNG), with ethinylestradiol only mentioned as a component of the combined oral contraceptive comparator, and no quantitative PK parameters for ethinylestradiol are reported. |
| popPK | Ikeda_2023 | irrelevant | 0 | 0 | This is a clinical outcome study measuring work productivity and activity impairment, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Jaber_2023 | irrelevant | 0 | 0 | The study is an analytical chemistry/bioassay paper focusing on bisphenol detection, where ethinylestradiol is used only as a reference standard for sensitivity comparison and no PK parameters are reported. |
| popPK | Jensen_2023 | irrelevant | 0 | 0 | The paper describes a bioanalytical method validation for monitoring compliance, not a pharmacokinetic study reporting disposition parameters for ethinylestradiol. |
| popPK | Lindim_2019 | irrelevant | 0 | 0 | The study is an ecotoxicological risk assessment modeling environmental concentrations in water, not a pharmacokinetic study providing disposition parameters (CL, V, etc.) for ethinylestradiol. |
| popPK | Ramírez-Montero_2022 | irrelevant | 0 | 0 | The study is a toxicological investigation in zebrafish measuring teratogenic effects and oxidative stress biomarkers, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Rose_2002 | irrelevant | 0 | 0 | The study is an ecotoxicology/biomarker study measuring vitellogenin induction, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Scheffler_1999 | irrelevant | 2 | 0 | The study assesses thalidomide's effect on ethinylestradiol, but the abstract only reports qualitative findings (no significant differences) and lacks any specific numeric pharmacokinetic values for ethinylestradiol. |
| popPK | See_2022 | irrelevant | 0 | 0 | The study is an endocrine biomarker (vitellogenin induction) study in fish using ethinylestradiol as an exposure agent, not a pharmacokinetic study of the drug's disposition. |
| popPK | Stanczyk_1983 | relevant | 10 | 0 | The study reports pharmacokinetic parameters for ethinylestradiol in a two-compartment model, but the specific numeric values are not present in the provided evidence text. |
| popPK | Trujillo-de_2014 | relevant | 8 | 4 | The paper presents a pharmacokinetic model for ethinylestradiol from a contraceptive patch and compares simulated values to literature data, including AUC and absorption rate parameters, though some specific PK constants (like CL and Vd) are cited from external sources rather than fully detailed as original experimental results. |
| popPK | Völker_2014 | irrelevant | 0 | 0 | The study focuses on the ecotoxicology of ethinylestradiol in freshwater mudsnails, not on quantitative pharmacokinetic parameters. |
| popPK | de_1986 | irrelevant | 0 | 0 | The study describes the in vitro release characteristics of a vaginal ring delivery system, not the pharmacokinetics of ethinylestradiol. |
| popPK | de_2020 | irrelevant | 2 | 4 | Ethinylestradiol is used as a probe drug in a drug-drug interaction study (non-compartmental analysis) to assess ibrutinib's effect, not a study modeling EE's own disposition parameters like CL or V. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 08:59 UTC</sub>
