<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;oxaliplatin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Oxaliplatin_Deyme2019_reference&quot;,&quot;label&quot;:&quot;Deyme_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_oxaliplatin/Oxaliplatin_Deyme2019_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Oxaliplatin_Yang2025_reference&quot;,&quot;label&quot;:&quot;Yang_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_oxaliplatin/Oxaliplatin_Yang2025_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Oxaliplatin_Zhu2023_reference&quot;,&quot;label&quot;:&quot;Zhu_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_oxaliplatin/Oxaliplatin_Zhu2023_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# oxaliplatin

- **generic name:** oxaliplatin
- **ATC codes:** `L01XA03`
- **DrugBank:** [DB00526](https://go.drugbank.com/drugs/DB00526) · **PubChem:** [CID 6857599](https://pubchem.ncbi.nlm.nih.gov/compound/6857599)
- **molar mass:** 397.294 g/mol (C8H14N2O4Pt) — DrugBank
- **groups:** approved, investigational

## About

Oxaliplatin is a platinum-based anticancer drug used to treat colorectal and other gastrointestinal cancers, including colon, rectal, gastric, and pancreatic adenocarcinomas. It is an approved medicine and is included on the WHO list of essential medicines, so it is widely used in cancer care.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q422327](https://www.wikidata.org/wiki/Q422327) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| oxaliplatin | parent | 397.294 | C8H14N2O4Pt | DrugBank | [6857599](https://pubchem.ncbi.nlm.nih.gov/compound/6857599) | Ferron_2008, Lévi_2000, Nikanjam_2015 |
| platinum | metabolite | 195.08 | Pt | PubChem | [23939](https://pubchem.ncbi.nlm.nih.gov/compound/23939) | Lévi_2000 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 22:34 | 3:01 | 2/2/3 | 1/0/1 | 0/0/0 | 166,461/16,604 | einfracz / qwen3.8-27b | 8 | 2/6 | 6/2 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.0). Primary extraction retained.">cross-check: disputed</span> | [Deyme_2019_reference](drugs/drug_oxaliplatin/Oxaliplatin_Deyme2019_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 | Deyme L et al., Population pharmacokinetics of FOLFIRIN…, Cancer chemotherapy and pha… (2019) | [10.1007/s00280-018-3722-5](https://doi.org/10.1007/s00280-018-3722-5) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.455). Primary extraction retained.">cross-check: disputed</span> | [Yang_2025_reference](drugs/drug_oxaliplatin/Oxaliplatin_Yang2025_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Yang J et al., Clinical Pharmacology Profile of the Cl…, Clinical pharmacokinetics (2025) | [10.1007/s40262-025-01552-x](https://doi.org/10.1007/s40262-025-01552-x) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.75). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: disposition incomplete — clearance/elimination from this paper; review-gap-fill…</sub><br><sub>route_to: `human_review`</sub> | [Ferron_2008_reference](drugs/drug_oxaliplatin/Oxaliplatin_Ferron2008_reference.md) | — | 1-compartment (no model) | 3 | Ferron G et al., Pharmacokinetics of heated intraperiton…, Cancer chemotherapy and pha… (2008) | [10.1007/s00280-007-0654-x](https://doi.org/10.1007/s00280-007-0654-x) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.182). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q19 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Nikanjam_2015_reference](drugs/drug_oxaliplatin/Oxaliplatin_Nikanjam2015_reference.md) | — | 1-compartment (no model) | 5 | Nikanjam M et al., Population pharmacokinetic analysis of…, Cancer chemotherapy and pha… (2015) | [10.1007/s00280-014-2667-6](https://doi.org/10.1007/s00280-014-2667-6) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.286). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: unreported model parameter default(s): k21</sub><br><sub>route_to: `scholar`</sub> | [Zhu_2023_reference](drugs/drug_oxaliplatin/Oxaliplatin_Zhu2023_reference.md) | ▶ model + simulator | 2-compartment, IV | 3 | Zhu J et al., Translational Pharmacokinetic/Pharmacod…, Pharmaceutics (2023) | [10.3390/pharmaceutics15092274](https://doi.org/10.3390/pharmaceutics15092274) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Delord_2003_reference](drugs/drug_oxaliplatin/Oxaliplatin_Delord2003_reference.md) | — | 1-compartment (no model) | 0 | Delord JP et al., Population pharmacokinetics of oxalipla…, Cancer chemotherapy and pha… (2003) | [10.1007/s00280-002-0550-3](https://doi.org/10.1007/s00280-002-0550-3) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.154). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Lévi_2000_reference](drugs/drug_oxaliplatin/Oxaliplatin_Lvi2000_reference.md) | — | 1-compartment (no model) | 1 | Lévi F et al., Oxaliplatin: pharmacokinetics and chron…, Clinical pharmacokinetics (2000) | [10.2165/00003088-200038010-00001](https://doi.org/10.2165/00003088-200038010-00001) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.778). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Kobuchi_2020_xacute](drugs/drug_oxaliplatin/pd_Kobuchi_2020_xacute.md) | number of withdrawal responses in the acetone test ← L-OHP · indirect response — drug stimulates the production of number of withdrawal responses in the acetone test | model (no simulator) | Kobuchi S et al., Semi-Mechanism-Based Pharmacokinetic-To…, Pharmaceutics (2020) | [10.3390/pharmaceutics12020125](https://doi.org/10.3390/pharmaceutics12020125) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Kobuchi_2020_xchronic](drugs/drug_oxaliplatin/pd_Kobuchi_2020_xchronic.md) | threshold value in the von Frey test ← L-OHP · delayed effect through transit (transduction) compartments | — | Kobuchi S et al., Semi-Mechanism-Based Pharmacokinetic-To…, Pharmaceutics (2020) | [10.3390/pharmaceutics12020125](https://doi.org/10.3390/pharmaceutics12020125) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.625). Primary extraction retained.">cross-check: disputed</span> | [Zhu_2023_PDTO](drugs/drug_oxaliplatin/pd_Zhu_2023_PDTO.md) | PDTO volumes ← oxaliplatin · direct sigmoid Emax (Hill) effect | model (no simulator) | Zhu J et al., Translational Pharmacokinetic/Pharmacod…, Pharmaceutics (2023) | [10.3390/pharmaceutics15092274](https://doi.org/10.3390/pharmaceutics15092274) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 71 matched, 20 returned
- **screened:** 6  ·  **relevant:** 5
- **records:** 7  ·  extracted 2  ·  needs_review 3  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_6 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

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
