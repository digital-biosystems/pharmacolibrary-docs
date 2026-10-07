<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;oxaliplatin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Oxaliplatin_Deyme2019_reference&quot;,&quot;label&quot;:&quot;Deyme_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_oxaliplatin/Oxaliplatin_Deyme2019_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Oxaliplatin_Yang2025_reference&quot;,&quot;label&quot;:&quot;Yang_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_oxaliplatin/Oxaliplatin_Yang2025_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Oxaliplatin_Zhu2023_reference&quot;,&quot;label&quot;:&quot;Zhu_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_oxaliplatin/Oxaliplatin_Zhu2023_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# oxaliplatin

- **generic name:** oxaliplatin
- **ATC codes:** `L01XA03`
- **DrugBank:** [DB00526](https://go.drugbank.com/drugs/DB00526) · **PubChem:** [CID 6857599](https://pubchem.ncbi.nlm.nih.gov/compound/6857599)
- **molar mass:** 397.294 g/mol (C8H14N2O4Pt) — DrugBank
- **groups:** approved, investigational

## About

Oxaliplatin is a platinum-based anticancer drug used to treat colorectal and other gastrointestinal cancers, including colon, rectal, gastric, and pancreatic adenocarcinomas. It is an approved medicine and is included on the WHO list of essential medicines, so it is widely used in cancer care.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q422327](https://www.wikidata.org/wiki/Q422327) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| oxaliplatin | parent | 397.294 | C8H14N2O4Pt | DrugBank | [6857599](https://pubchem.ncbi.nlm.nih.gov/compound/6857599) | Ferron_2008, Lévi_2000, Nikanjam_2015 |
| platinum | metabolite | 195.08 | Pt | PubChem | [23939](https://pubchem.ncbi.nlm.nih.gov/compound/23939) | Lévi_2000 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 22:34 | 3:01 | 3/2/2 | 1/0/1 | 0/0/0 | 166,461/16,604 | einfracz / qwen3.8-27b | 8 | 2/6 | 6/2 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Deyme_2019_reference](drugs/drug_oxaliplatin/Oxaliplatin_Deyme2019_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 | Deyme L et al., Population pharmacokinetics of FOLFIRIN…, Cancer chemotherapy and pha… (2019) | [10.1007/s00280-018-3722-5](https://doi.org/10.1007/s00280-018-3722-5) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Yang_2025_reference](drugs/drug_oxaliplatin/Oxaliplatin_Yang2025_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Yang J et al., Clinical Pharmacology Profile of the Cl…, Clinical pharmacokinetics (2025) | [10.1007/s40262-025-01552-x](https://doi.org/10.1007/s40262-025-01552-x) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Zhu_2023_reference](drugs/drug_oxaliplatin/Oxaliplatin_Zhu2023_reference.md) | ▶ model + simulator | 2-compartment, IV | 3 | Zhu J et al., Translational Pharmacokinetic/Pharmacod…, Pharmaceutics (2023) | [10.3390/pharmaceutics15092274](https://doi.org/10.3390/pharmaceutics15092274) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — clearance/elimination from this paper; review-gap-fill…</sub><br><sub>route_to: `human_review`</sub> | [Ferron_2008_reference](drugs/drug_oxaliplatin/Oxaliplatin_Ferron2008_reference.md) | — | 1-compartment (no model) | 3 | Ferron G et al., Pharmacokinetics of heated intraperiton…, Cancer chemotherapy and pha… (2008) | [10.1007/s00280-007-0654-x](https://doi.org/10.1007/s00280-007-0654-x) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q19 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Nikanjam_2015_reference](drugs/drug_oxaliplatin/Oxaliplatin_Nikanjam2015_reference.md) | — | 1-compartment (no model) | 5 | Nikanjam M et al., Population pharmacokinetic analysis of…, Cancer chemotherapy and pha… (2015) | [10.1007/s00280-014-2667-6](https://doi.org/10.1007/s00280-014-2667-6) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Delord_2003_reference](drugs/drug_oxaliplatin/Oxaliplatin_Delord2003_reference.md) | — | 1-compartment (no model) | 0 | Delord JP et al., Population pharmacokinetics of oxalipla…, Cancer chemotherapy and pha… (2003) | [10.1007/s00280-002-0550-3](https://doi.org/10.1007/s00280-002-0550-3) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Lévi_2000_reference](drugs/drug_oxaliplatin/Oxaliplatin_Lvi2000_reference.md) | — | 1-compartment (no model) | 1 | Lévi F et al., Oxaliplatin: pharmacokinetics and chron…, Clinical pharmacokinetics (2000) | [10.2165/00003088-200038010-00001](https://doi.org/10.2165/00003088-200038010-00001) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Kobuchi_2020_xacute](drugs/drug_oxaliplatin/pd_Kobuchi_2020_xacute.md) | number of withdrawal responses in the acetone test ← L-OHP · indirect response — drug stimulates the production of number of withdrawal responses in the acetone test | model (no simulator) | Kobuchi S et al., Semi-Mechanism-Based Pharmacokinetic-To…, Pharmaceutics (2020) | [10.3390/pharmaceutics12020125](https://doi.org/10.3390/pharmaceutics12020125) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Kobuchi_2020_xchronic](drugs/drug_oxaliplatin/pd_Kobuchi_2020_xchronic.md) | threshold value in the von Frey test ← L-OHP · delayed effect through transit (transduction) compartments | — | Kobuchi S et al., Semi-Mechanism-Based Pharmacokinetic-To…, Pharmaceutics (2020) | [10.3390/pharmaceutics12020125](https://doi.org/10.3390/pharmaceutics12020125) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Zhu_2023_PDTO](drugs/drug_oxaliplatin/pd_Zhu_2023_PDTO.md) | PDTO volumes ← oxaliplatin · direct sigmoid Emax (Hill) effect | model (no simulator) | Zhu J et al., Translational Pharmacokinetic/Pharmacod…, Pharmaceutics (2023) | [10.3390/pharmaceutics15092274](https://doi.org/10.3390/pharmaceutics15092274) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=oxaliplatin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCG2` substrate | DrugBank actor |
| absorption | liver | `ABCG2` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | small intestine | `ABCG2` substrate | DrugBank actor |
| absorption | testis | `ABCG2` substrate | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| distribution | liver | `SLC22A3` substrate | DrugBank actor |
| distribution | placenta | `SLC22A3` substrate | DrugBank actor |
| distribution | skeletal muscle | `SLC22A3` substrate | DrugBank actor |
| metabolism | blood | `GSTT1` substrate | DrugBank actor |
| metabolism | liver | `GSTM1` substrate, `GSTP1` substrate, `GSTT1` substrate, `NQO1` substrate | DrugBank actor |
| metabolism | lung | `GSTP1` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `ABCC2` substrate, `SLC22A2` substrate | DrugBank actor |
| excretion | liver | `ABCC2` substrate | DrugBank actor |
| excretion | small intestine | `ABCC2` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ATP7A (substrate), ATP7B (substrate), DNA (adduct), DNA (cross-linking/alkylation), MPO (substrate), MT1A (substrate), MT2A (substrate), SLC31A1 (substrate), SOD1 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 71 matched, 20 returned
- **screened:** 6  ·  **relevant:** 5
- **records:** 7  ·  extracted 3  ·  needs_review 2  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Delord_2003.pdf` | Delord JP et al., Population pharmacokinetics of oxalipla…, Cancer chemotherapy and pha… (2003) | popPK | 10 | [10.1007/s00280-002-0550-3](https://doi.org/10.1007/s00280-002-0550-3) | [12647013](https://pubmed.ncbi.nlm.nih.gov/12647013) | The paper reports a population PK model for oxaliplatin with a specific quantitative clearance equation and covariates, though volume and Q values are not explicitly listed in the text. |
| `Ferron_2008.pdf` | Ferron G et al., Pharmacokinetics of heated intraperiton…, Cancer chemotherapy and pha… (2008) | popPK | 10 | [10.1007/s00280-007-0654-x](https://doi.org/10.1007/s00280-007-0654-x) | [18084764](https://pubmed.ncbi.nlm.nih.gov/18084764) | The paper reports a population PK model for oxaliplatin with specific numeric values for peritoneal and plasma clearance provided in the text. |
| `Lévi_2000.pdf` | Lévi F et al., Oxaliplatin: pharmacokinetics and chron…, Clinical pharmacokinetics (2000) | popPK | 10 | [10.2165/00003088-200038010-00001](https://doi.org/10.2165/00003088-200038010-00001) | [10668856](https://pubmed.ncbi.nlm.nih.gov/10668856) | The text explicitly reports quantitative pharmacokinetic parameters including half-lives, clearance proportions, and compartmental model details for oxaliplatin. |
| `Nikanjam_2015.pdf` | Nikanjam M et al., Population pharmacokinetic analysis of…, Cancer chemotherapy and pha… (2015) | popPK | 10 | [10.1007/s00280-014-2667-6](https://doi.org/10.1007/s00280-014-2667-6) | [25557868](https://pubmed.ncbi.nlm.nih.gov/25557868) | The study is a population PK analysis of oxaliplatin in humans, but specific model parameter estimates (CL, V, Q) are largely in tables/figures not fully transcribed, though median CL values are listed. |
| `Kobuchi_2020_2.pdf` | Kobuchi S et al., Mechanism-based pharmacokinetic-pharmac…, Xenobiotica; the fate of fo… (2020) | popPK | 9 | [10.1080/00498254.2019.1601790](https://doi.org/10.1080/00498254.2019.1601790) | [30938550](https://pubmed.ncbi.nlm.nih.gov/30938550) | The paper describes a PK-PD model for oxaliplatin in rats, but the specific quantitative parameter values (CL, V, etc.) are not present in the provided text, abstract, or evidence. |
| `Tsukushi_2024.pdf` | Tsukushi Y et al., Pharmacokinetic-toxicodynamic Modeling…, Anticancer research (2024) | popPK | 7 | [10.21873/anticanres.16846](https://doi.org/10.21873/anticanres.16846) | [38307592](https://pubmed.ncbi.nlm.nih.gov/38307592) | The study is a PK-TD modeling study in rats involving oxaliplatin distribution, but specific numeric PK parameter values (CL, V, etc.) are not present in the provided text. |

<sub>queue written 2026-10-06T22:32:52.635429+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Burakgazi_2011 | irrelevant | 0 | 0 | The study focuses on the natural history of oxaliplatin-induced neuropathy and measures nerve fiber density, containing no pharmacokinetic parameters such as clearance or volume. |
| popPK | Cui_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of envafolimab (a PD-L1 antibody), not oxaliplatin. |
| popPK | Deyme_2019 | irrelevant | 3 | 8 | The evidence contains PK parameter sets for Oxaliplatin (e.g., Nikanjam, Kho, Delord) but they are embedded in code scripts primarily modeling 5-FU, Irinotecan, and Oxaliplatin combinations, rather than presenting a dedicated PK study or population analysis for Oxaliplatin alone. |
| popPK | Eljack_2022 | irrelevant | 0 | 0 | This is a review of nanoparticle design for chemoresistance reversal, not a pharmacokinetic study, and it reports no quantitative PK parameters for oxaliplatin. |
| popPK | Kalayda_2017 | irrelevant | 0 | 0 | The paper describes the synthesis and characterization of a fluorescent oxaliplatin analog (CFDA-oxPt) and its in vitro cytotoxicity, but it is not a pharmacokinetic study and reports no disposition parameters (CL, V, etc.) for oxaliplatin. |
| popPK | Kirstein_2008 | irrelevant | 0 | 0 | The study reports in-vitro cytotoxicity and exposure-response data (IC50, Emax) for oxaliplatin in cell lines, not quantitative pharmacokinetic disposition parameters (CL, V, Q, ka). |
| popPK | Kobuchi_2020 | relevant | 8 | 0 | The study develops a population PK-TD model for oxaliplatin in rats, but the specific numeric parameter values are located in Table 1 which is not included in the provided evidence. |
| popPK | Kobuchi_2020_2 | irrelevant | 9 | 0 | The paper describes a PK-PD model for oxaliplatin in rats, but the specific quantitative parameter values (CL, V, etc.) are not present in the provided text, abstract, or evidence. |
| popPK | Modest_2025 | irrelevant | 0 | 0 | The paper is a quality of life analysis of sotorasib and panitumumab in colorectal cancer and does not report oxaliplatin pharmacokinetic parameters. |
| popPK | Shakil_2022 | irrelevant | 0 | 0 | The paper is an in-vitro cell viability study comparing the SRB assay performance, not a pharmacokinetic study reporting disposition parameters for oxaliplatin. |
| popPK | Tsukushi_2024 | relevant | 7 | 2 | The study is a PK-TD modeling study in rats involving oxaliplatin distribution, but specific numeric PK parameter values (CL, V, etc.) are not present in the provided text. |
| popPK | Vechalapu_2024 | irrelevant | 0 | 0 | The paper focuses on the mechanism of action of copper and manganese complexes and mentions oxaliplatin only as a commercial therapeutic for synergy testing, without reporting pharmacokinetic parameters. |
| popPK | Yamada_2025 | relevant | 9 | 2 | The paper performs a population PK analysis for oxaliplatin (3-compartment model) in humans, but the specific numeric parameter estimates (CL, V, etc.) are located in Supplementary Tables which are not included in the provided evidence. |
| popPK | Yang_2025 | irrelevant | 1 | 1 | This paper focuses on the pharmacokinetics of zolbetuximab; oxaliplatin is only mentioned as a co-administered chemotherapy agent in a drug-drug interaction assessment, without providing independent PK disposition parameters (CL, V, etc.) for oxaliplatin itself. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 22:33 UTC</sub>
