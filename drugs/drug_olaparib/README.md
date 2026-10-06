<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;olaparib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Olaparib_Velev2021_reference&quot;,&quot;label&quot;:&quot;Velev_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_olaparib/Olaparib_Velev2021_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# olaparib

- **generic name:** olaparib
- **ATC codes:** `L01XK01`
- **DrugBank:** [DB09074](https://go.drugbank.com/drugs/DB09074) · **PubChem:** not captured
- **molar mass:** 434.4628 g/mol (C24H23FN4O3) — DrugBank
- **groups:** approved, investigational

## About

Olaparib is a PARP inhibitor anticancer drug used to treat cancers such as ovarian, breast, pancreatic, and castration-resistant prostate cancer. It is approved and authorised in the European Union for these cancer indications.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7083106](https://www.wikidata.org/wiki/Q7083106) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| olaparib | parent | 434.463 | C24H23FN4O3 | DrugBank | — | DeJongh_2025, Overbeek_2025, Velev_2021 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 21:19 | 4:39 | 1/2/1 | 2/0/1 | 0/0/0 | 408,584/17,826 | einfracz / qwen3.8-27b | 11 | 1/10 | 11/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Velev_2021_reference](drugs/drug_olaparib/Olaparib_Velev2021_reference.md) | ▶ model + simulator | 2-compartment, oral | 7 | Velev M et al., Association between Olaparib Exposure a…, Pharmaceuticals (Basel, Swi… (2021) | [10.3390/ph14080804](https://doi.org/10.3390/ph14080804) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q3 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Overbeek_2025_reference](drugs/drug_olaparib/Olaparib_Overbeek2025_reference.md) | — | parent + metabolite (no model) | 3 | Overbeek JK et al., Population Pharmacokinetics of Cobicist…, Clinical pharmacokinetics (2025) | [10.1007/s40262-025-01480-w](https://doi.org/10.1007/s40262-025-01480-w) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [DeJongh_2025_reference](drugs/drug_olaparib/Olaparib_DeJongh2025_reference.md) | — | general linear (no model) | 7 (+1 cov.) | DeJongh J et al., Defining preclinical efficacy with the…, Journal of pharmacokinetics… (2025) | [10.1007/s10928-025-09962-x](https://doi.org/10.1007/s10928-025-09962-x) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Peer_2017_reference](drugs/drug_olaparib/Olaparib_Peer2017_reference.md) | — | 1-compartment (no model) | 0 | Peer CJ et al., Population pharmacokinetic analyses of…, Cancer chemotherapy and pha… (2017) | [10.1007/s00280-017-3346-1](https://doi.org/10.1007/s00280-017-3346-1) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Jackson_2024_SF](drugs/drug_olaparib/pd_Jackson_2024_SF.md) | surviving fraction ← olaparib · inhibition effect | — | Jackson MR et al., ClonoScreen3D - A Novel 3-Dimensional C…, International journal of ra… (2024) | [10.1016/j.ijrobp.2024.02.046](https://doi.org/10.1016/j.ijrobp.2024.02.046) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Sterlé_2024_CREAT](drugs/drug_olaparib/pd_Sterl_2024_CREAT.md) | creatininaemia ← olaparib · indirect response — drug inhibits the loss of creatininaemia | — | Sterlé M et al., Improving olaparib exposure to optimize…, Therapeutic advances in med… (2024) | [10.1177/17588359241248328](https://doi.org/10.1177/17588359241248328) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Sterlé_2024_HB](drugs/drug_olaparib/pd_Sterl_2024_HB.md) | haemoglobinaemia ← olaparib · disease-progression model | model (no simulator) | Sterlé M et al., Improving olaparib exposure to optimize…, Therapeutic advances in med… (2024) | [10.1177/17588359241248328](https://doi.org/10.1177/17588359241248328) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [DeJongh_2025_TXeno](drugs/drug_olaparib/pd_DeJongh_2025_TXeno.md) | Tumor volume ← olaparib · delayed effect through an effect compartment | model (no simulator) | DeJongh J et al., Defining preclinical efficacy with the…, Journal of pharmacokinetics… (2025) | [10.1007/s10928-025-09962-x](https://doi.org/10.1007/s10928-025-09962-x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=olaparib) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| distribution | blood | `ALB` binder, `ORM1` binder | DrugBank actor |
| metabolism | kidney | `CYP3A5` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP2B6` inducer, `CYP3A4` inhibitor/substrate, `CYP3A5` inhibitor/substrate, `UGT1A1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate, `CYP3A5` inhibitor/substrate, `UGT1A1` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: AKR1C3 (inhibitor), PARP1 (inhibitor), PARP2 (inhibitor), PARP3 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 22 matched, 19 returned
- **screened:** 7  ·  **relevant:** 7
- **records:** 4  ·  extracted 1  ·  needs_review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Peer_2017.pdf` | Peer CJ et al., Population pharmacokinetic analyses of…, Cancer chemotherapy and pha… (2017) | popPK | 10 | [10.1007/s00280-017-3346-1](https://doi.org/10.1007/s00280-017-3346-1) | [28577239](https://pubmed.ncbi.nlm.nih.gov/28577239) | The paper describes a population PK model for olaparib and reports key parameters (CL 6.8 L/h, V 33 L) in the abstract, but lacks detailed compartmental values (Q, ka) or individual patient data which would be in the full text/supplementary materials not fully provided. |
| `Zhou_2019.pdf` | Zhou D et al., Bridging Olaparib Capsule and Tablet Fo…, Clinical pharmacokinetics (2019) | popPK | 10 | [10.1007/s40262-018-0714-x](https://doi.org/10.1007/s40262-018-0714-x) | [30357650](https://pubmed.ncbi.nlm.nih.gov/30357650) | The study reports a population PK model, but the specific numeric parameter values (CL, V, Ka, etc.) are not explicitly listed in the provided abstract text, appearing only as qualitative descriptions or exposure metrics like AUC/Cmax. |
| `Chen_2026.pdf` | Chen L et al., A pharmacokinetic-pharmacodynamic/toxic…, Cancer chemotherapy and pha… (2026) | popPK | 8 | [10.1007/s00280-025-04862-w](https://doi.org/10.1007/s00280-025-04862-w) | [41554954](https://pubmed.ncbi.nlm.nih.gov/41554954) | Although the study uses human olaparib PK parameters, the specific numeric values are not present in the provided evidence (likely in supplementary or text not shown). |

<sub>queue written 2026-10-06T21:15:46.545308+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bundred_2013 | irrelevant | 2 | 0 | The abstract describes a population PK study but does not provide specific numeric parameter values (e.g., CL, V) in the extracted evidence. |
| popPK | Chen_2025 | irrelevant | 0 | 0 | The study is a mechanistic cardioprotection analysis (in vitro/in vivo) and does not report quantitative pharmacokinetic parameters for olaparib. |
| popPK | Chen_2026 | irrelevant | 8 | 1 | Although the study uses human olaparib PK parameters, the specific numeric values are not present in the provided evidence (likely in supplementary or text not shown). |
| popPK | Dimitrijevs_2026 | irrelevant | 0 | 0 | The paper describes the synthesis and in-vitro biochemical/cellular activity of new mitochondria-targeted olaparib conjugates, containing no pharmacokinetic disposition parameters. |
| popPK | Hodson_2023 | irrelevant | 0 | 0 | The study models tumor-immune interactions and efficacy, explicitly excluding pharmacokinetic modeling as uninformative for the high doses used; no PK parameters for olaparib are reported. |
| popPK | Hodson_2023_2 | irrelevant | 0 | 0 | This is a tumor pharmacodynamic modeling study in mice where olaparib is used as a co-administered agent, and no olaparib-specific pharmacokinetic parameters are reported. |
| popPK | Jackson_2024 | irrelevant | 0 | 0 | This is an in vitro mechanistic/cytotoxicity study (clonogenic survival assay) assessing radiosensitization; it reports EC50 and Radiation Interaction Ratios (RIR), not pharmacokinetic parameters (CL, V, ka, half-life) for olaparib. |
| popPK | Majeed_2022 | irrelevant | 0 | 0 | The study is a preclinical efficacy trial of TAK-243 where olaparib is used only as a comparator agent for synergy testing, with no PK parameters reported. |
| popPK | Mekhaeil_2023 | irrelevant | 0 | 0 | This is an in-vitro mechanistic and toxicology study investigating the therapeutic effects of olaparib on astrocytes, not a pharmacokinetic study, and reports no disposition parameters (CL, V, ka). |
| popPK | Mohmaed_2023 | irrelevant | 4 | 0 | The study is an exposure-response analysis reporting only median Cmin values, without quantitative compartmental PK parameters (CL, V, ka, t1/2) or a population PK model. |
| popPK | Zhou_2019 | relevant | 10 | 1 | The study reports a population PK model, but the specific numeric parameter values (CL, V, Ka, etc.) are not explicitly listed in the provided abstract text, appearing only as qualitative descriptions or exposure metrics like AUC/Cmax. |
| popPK | Zhou_2019_2 | irrelevant | 1 | 0 | The study focuses on exposure-response relationships for efficacy and safety, not the quantification of population pharmacokinetic parameters (CL, V, ka, etc.). |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 21:16 UTC</sub>
