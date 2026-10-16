<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01D&quot;,&quot;href&quot;:&quot;atc/L01D.md&quot;},{&quot;label&quot;:&quot;idarubicin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Idarubicin_Kuhlmann2001_reference&quot;,&quot;label&quot;:&quot;Kuhlmann_2001_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_idarubicin/Idarubicin_Kuhlmann2001_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Idarubicin_Tamura1996_reference&quot;,&quot;label&quot;:&quot;Tamura_1996_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_idarubicin/Idarubicin_Tamura1996_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# idarubicin

- **generic name:** idarubicin
- **ATC codes:** `L01DB06`
- **DrugBank:** [DB01177](https://go.drugbank.com/drugs/DB01177) · **PubChem:** [CID 42890](https://pubchem.ncbi.nlm.nih.gov/compound/42890)
- **molar mass:** 497.4939 g/mol (C26H27NO9) — DrugBank
- **groups:** approved, investigational

## About

Idarubicin is an anthracycline antibiotic used to treat cancers, mainly acute myeloid leukemia and other leukemias, as well as breast cancer. It is an approved anticancer medicine, used mainly in hospital settings for leukemia treatment.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1063862](https://www.wikidata.org/wiki/Q1063862) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| idarubicin | parent | 497.494 | C26H27NO9 | DrugBank | [42890](https://pubchem.ncbi.nlm.nih.gov/compound/42890) | Gillies_1987, Kuhlmann_2001, Looby_1997, Pea_1999, Reid_1990, Stewart_1991, Tamura_1996, Weiss_2002 |
| idarubicinol | metabolite | 499.516 | C26H29NO9 | PubChem | [21118312](https://pubchem.ncbi.nlm.nih.gov/compound/21118312) | Reid_1990, Stewart_1991 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 18:10 | 10:36 | 2/3/3 | 5/0/1 | 0/0/0 | 194,629/49,649 | openai / gpt-6-luna | 5 | 1/4 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.3). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Kuhlmann_2001_reference](drugs/drug_idarubicin/Idarubicin_Kuhlmann2001_reference.md) | ▶ model + simulator | 1-compartment, IV | 3 | Kuhlmann O et al., Pharmacokinetics and toxicity of idarub…, European journal of drug me… (2001) | [10.1007/BF03226374](https://doi.org/10.1007/BF03226374) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.625). Primary extraction retained.">cross-check: disputed</span> | [Tamura_1996_reference](drugs/drug_idarubicin/Idarubicin_Tamura1996_reference.md) | ▶ model + simulator | 1-compartment, IV | 4 | Tamura K, A phase I study of idarubicin hydrochlo…, Seminars in hematology (1996) | — |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by qwen3.8-27b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q22 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Gillies_1987_reference](drugs/drug_idarubicin/Idarubicin_Gillies1987_reference.md) | — | 1-compartment (no model) | 3 | Gillies HC et al., Pharmacokinetics of idarubicin (4-demet…, British journal of clinical… (1987) | [10.1111/j.1365-2125.1987.tb03049.x](https://doi.org/10.1111/j.1365-2125.1987.tb03049.x) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q88 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Pea_1999_reference](drugs/drug_idarubicin/Idarubicin_Pea1999_reference.md) | — | 1-compartment (no model) | 2 | Pea F et al., Multidrug resistance modulation in vivo…, European journal of clinica… (1999) | [10.1007/s002280050641](https://doi.org/10.1007/s002280050641) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.375). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Reid_1990_reference](drugs/drug_idarubicin/Idarubicin_Reid1990_reference.md) | — | parent + metabolite (no model) | 4 | Reid JM et al., Plasma pharmacokinetics and cerebrospin…, Cancer research (1990) | — |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.857). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Looby_1997_reference](drugs/drug_idarubicin/Idarubicin_Looby1997_reference.md) | — | 1-compartment (no model) | 3 | Looby M et al., Pharmacokinetics and tissue distributio…, Cancer chemotherapy and pha… (1997) | [10.1007/s002800050614](https://doi.org/10.1007/s002800050614) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.625). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Stewart_1991_reference](drugs/drug_idarubicin/Idarubicin_Stewart1991_reference.md) | — | parent + metabolite (no model) | 1 | Stewart DJ et al., Bioavailability and pharmacology of ora…, Cancer chemotherapy and pha… (1991) | [10.1007/BF00685117](https://doi.org/10.1007/BF00685117) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by qwen3.8-27b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Weiss_2002_reference](drugs/drug_idarubicin/Idarubicin_Weiss2002_reference.md) | — | 1-compartment (no model) | 2 | Weiss M et al., P-glycoprotein inhibitors enhance satur…, The Journal of pharmacology… (2002) | [10.1124/jpet.300.2.688](https://doi.org/10.1124/jpet.300.2.688) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Bozza_2021_CI](drugs/drug_idarubicin/pd_Bozza_2021_CI.md) | cellular index ← idarubicin · direct sigmoid Emax (Hill) effect | — | Bozza WP et al., Anthracycline-Induced Cardiotoxicity: M…, The AAPS journal (2021) | [10.1208/s12248-021-00576-y](https://doi.org/10.1208/s12248-021-00576-y) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Piwnica-Worms_1995_Tc_SESTAMIBI](drugs/drug_idarubicin/pd_Piwnica_Worms_1995_Tc_SESTAMIBI.md) | Tc-SESTAMIBI accumulation ← idarubicin · direct sigmoid Emax (Hill) effect | — | Piwnica-Worms D et al., Characterization of multidrug resistanc…, Biochemistry (1995) | [10.1021/bi00038a015](https://doi.org/10.1021/bi00038a015) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Tavener_2021_MTT](drugs/drug_idarubicin/pd_Tavener_2021_MTT.md) | cell viability ← idarubicin · inhibition effect | — | Tavener AM et al., Anthracycline-induced cytotoxicity in t…, Molecular biology reports (2021) | [10.1007/s11033-020-06109-8](https://doi.org/10.1007/s11033-020-06109-8) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Weiss_2002_left_ventricular_developed_pressure](drugs/drug_idarubicin/pd_Weiss_2002_left_ventricular_developed_pressure.md) | left ventricular developed pressure ← idarubicin · inhibition effect | — | Weiss M et al., P-glycoprotein inhibitors enhance satur…, The Journal of pharmacology… (2002) | [10.1124/jpet.300.2.688](https://doi.org/10.1124/jpet.300.2.688) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Weiss_2006_KCl](drugs/drug_idarubicin/pd_Weiss_2006_KCl.md) | KCl-induced contraction ← idarubicin · inhibition effect | — | Weiss M et al., Effects of idarubicin and idarubicinol…, Anti-cancer drugs (2006) | [10.1097/01.cad.0000185186.03099.31](https://doi.org/10.1097/01.cad.0000185186.03099.31) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Weiss_2006_NA](drugs/drug_idarubicin/pd_Weiss_2006_NA.md) | small mesenteric artery reactivity to noradrenaline ← idarubicin · inhibition effect | — | Weiss M et al., Effects of idarubicin and idarubicinol…, Anti-cancer drugs (2006) | [10.1097/01.cad.0000185186.03099.31](https://doi.org/10.1097/01.cad.0000185186.03099.31) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Weiss_2006_PE](drugs/drug_idarubicin/pd_Weiss_2006_PE.md) | PE-induced contraction ← idarubicin · inhibition effect | — | Weiss M et al., Effects of idarubicin and idarubicinol…, Anti-cancer drugs (2006) | [10.1097/01.cad.0000185186.03099.31](https://doi.org/10.1097/01.cad.0000185186.03099.31) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.875). Primary extraction retained.">cross-check: disputed</span> | [Megías-Vericat_2019_LPC](drugs/drug_idarubicin/pd_Meg_as_Vericat_2019_LPC.md) | live pathological cells (LPC) ← idarubicin · direct sigmoid Emax (Hill) effect | model (no simulator) | Megías-Vericat JE et al., Differences in, Mediterranean journal of he… (2019) | [10.4084/MJHID.2019.016](https://doi.org/10.4084/MJHID.2019.016) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=idarubicin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood-brain barrier | `ABCC1` inhibitor | DrugBank actor |
| distribution | lung | `ABCC1` inhibitor | DrugBank actor |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2C9` substrate, `CYP2D6` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: DNA (intercalation), TOP2A (inhibitor), TOP2B (modulator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 19 matched, 18 returned
- **screened:** 8  ·  **relevant:** 8
- **records:** 8  ·  extracted 2  ·  needs_review 3  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_10 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kuhlmann_2001.pdf` | Kuhlmann O et al., Pharmacokinetics and toxicity of idarub…, European journal of drug me… (2001) | popPK | 10 | [10.1007/BF03226374](https://doi.org/10.1007/BF03226374) | [11808862](https://pubmed.ncbi.nlm.nih.gov/11808862) | Rat idarubicin PK parameters, including clearance and steady-state volume, are reported numerically in the evidence. |
| `Looby_1997.pdf` | Looby M et al., Pharmacokinetics and tissue distributio…, Cancer chemotherapy and pha… (1997) | popPK | 10 | [10.1007/s002800050614](https://doi.org/10.1007/s002800050614) | [9118470](https://pubmed.ncbi.nlm.nih.gov/9118470) | Rabbit idarubicin pharmacokinetics are modeled with numeric clearance, distribution clearance, and steady-state volume values. |
| `Pea_1999.pdf` | Pea F et al., Multidrug resistance modulation in vivo…, European journal of clinica… (1999) | popPK | 10 | [10.1007/s002280050641](https://doi.org/10.1007/s002280050641) | [10456485](https://pubmed.ncbi.nlm.nih.gov/10456485) | Human idarubicin pharmacokinetics are modeled and numeric clearance values are reported. |
| `Reid_1990.pdf` | Reid JM et al., Plasma pharmacokinetics and cerebrospin…, Cancer research (1990) | popPK | 10 | not captured | [2208112](https://pubmed.ncbi.nlm.nih.gov/2208112) | Quantitative pharmacokinetic parameters for idarubicin and idarubicinol are reported in the evidence. |
| `Stewart_1991.pdf` | Stewart DJ et al., Bioavailability and pharmacology of ora…, Cancer chemotherapy and pha… (1991) | popPK | 10 | [10.1007/BF00685117](https://doi.org/10.1007/BF00685117) | [1998987](https://pubmed.ncbi.nlm.nih.gov/1998987) | Human idarubicin pharmacokinetics are modeled, with numeric half-life and bioavailability values included in the evidence. |
| `Tamura_1996.pdf` | Tamura K, A phase I study of idarubicin hydrochlo…, Seminars in hematology (1996) | popPK | 10 | not captured | [8916310](https://pubmed.ncbi.nlm.nih.gov/8916310) | Human idarubicin PK parameters, including half-life, Vdss, and clearance, are numerically reported in the evidence. |
| `Weiss_2002.pdf` | Weiss M et al., P-glycoprotein inhibitors enhance satur…, The Journal of pharmacology… (2002) | popPK | 10 | [10.1124/jpet.300.2.688](https://doi.org/10.1124/jpet.300.2.688) | [11805234](https://pubmed.ncbi.nlm.nih.gov/11805234) | Rat-heart PK modeling reports numeric idarubicin uptake parameters (Km and Vmax) in the evidence. |
| `Eksborg_1990.pdf` | Eksborg S et al., Plasma pharmacokinetics of Idarubicin a…, Acta oncologica (Stockholm,… (1990) | popPK | 9 | [10.3109/02841869009096390](https://doi.org/10.3109/02841869009096390) | [2261209](https://pubmed.ncbi.nlm.nih.gov/2261209) | The study models intravenous idarubicin pharmacokinetics, but no numeric parameter values are provided in the evidence. |
| `Eksborg_1997.pdf` | Eksborg S et al., Plasma pharmacokinetics of idarubicin a…, Anti-cancer drugs (1997) | popPK | 9 | [10.1097/00001813-199701000-00005](https://doi.org/10.1097/00001813-199701000-00005) | [9147610](https://pubmed.ncbi.nlm.nih.gov/9147610) | Human idarubicin pharmacokinetics are modeled, but numeric disposition parameter values are not provided. |
| `Kang_2003.pdf` | Kang W et al., Kinetic analysis of saturable myocardia…, Pharmaceutical research (2003) | popPK | 8 | [10.1023/a:1022246708326](https://doi.org/10.1023/a:1022246708326) | [12608537](https://pubmed.ncbi.nlm.nih.gov/12608537) | Rat-heart uptake kinetics are modeled, but only relative changes are reported, not absolute parameter values. |

<sub>queue written 2026-10-06T18:01:10.326090+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bozza_2021 | irrelevant | 0 | 0 | The study measures in-vitro cardiotoxicity and EC50 values, not idarubicin disposition parameters. |
| popPK | Eksborg_1990 | relevant | 9 | 0 | The study models intravenous idarubicin pharmacokinetics, but no numeric parameter values are provided in the evidence. |
| popPK | Eksborg_1997 | relevant | 9 | 1 | Human idarubicin pharmacokinetics are modeled, but numeric disposition parameter values are not provided. |
| popPK | Kang_2003 | relevant | 8 | 4 | Rat-heart uptake kinetics are modeled, but only relative changes are reported, not absolute parameter values. |
| popPK | LaCasse_2006 | irrelevant | 0 | 0 | Idarubicin is only mentioned as a chemotherapy combination, with no idarubicin pharmacokinetic parameters reported. |
| popPK | Lica_2021 | irrelevant | 0 | 0 | This in-vitro cytotoxicity study reports drug activity, not idarubicin disposition or pharmacokinetic parameters. |
| popPK | Megías-Vericat_2019 | irrelevant | 1 | 1 | This is an ex vivo pharmacodynamic sensitivity study, not a disposition-PK study; parameter values are referenced in Table 2, which is not provided. |
| popPK | Piwnica-Worms_1995 | irrelevant | 0 | 0 | Idarubicin is only an inhibitor in an in-vitro transporter assay; its EC50 is not an idarubicin disposition parameter. |
| popPK | Tavener_2021 | irrelevant | 0 | 0 | This is an in-vitro cytotoxicity study, not a pharmacokinetic study; the idarubicin EC50 is not a disposition parameter. |
| popPK | Weiss_2006 | irrelevant | 0 | 0 | This rat tissue study reports vascular effects, not idarubicin pharmacokinetic parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 18:02 UTC</sub>
