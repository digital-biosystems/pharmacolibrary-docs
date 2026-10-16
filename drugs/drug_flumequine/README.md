<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01M&quot;,&quot;href&quot;:&quot;atc/J01M.md&quot;},{&quot;label&quot;:&quot;flumequine&quot;}]"></div>

# flumequine

- **generic name:** flumequine
- **ATC codes:** `J01MB07`
- **DrugBank:** [DB08972](https://go.drugbank.com/drugs/DB08972) · **PubChem:** [CID 3374](https://pubchem.ncbi.nlm.nih.gov/compound/3374)
- **molar mass:** 261.2484 g/mol (C14H12FNO3) — DrugBank
- **groups:** approved, withdrawn

## About

Flumequine is a quinolone antibacterial that was used to treat bacterial infections, particularly urinary tract infections. It has been withdrawn and is no longer in use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3074500](https://www.wikidata.org/wiki/Q3074500) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| flumequine | parent | 261.248 | C14H12FNO3 | DrugBank | [3374](https://pubchem.ncbi.nlm.nih.gov/compound/3374) | Mevius_1990, Ziv_1986 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 22:57 | 2:52 | 0/3/1 | 2/0/0 | 0/0/0 | 158,508/12,466 | einfracz / qwen3.8-27b | 4 | 2/2 | 3/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.714). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cattle</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Ziv_1986_reference](drugs/drug_flumequine/Flumequine_Ziv1986_reference.md) | — | 1-compartment (no model) | 7 | Ziv G et al., Clinical pharmacokinetics of flumequine…, Journal of veterinary pharm… (1986) | [10.1111/j.1365-2885.1986.tb00027.x](https://doi.org/10.1111/j.1365-2885.1986.tb00027.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.6). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (bird), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">bird</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Anadón_2008_reference](drugs/drug_flumequine/Flumequine_Anadn2008_reference.md) | — | 1-compartment (no model) | 0 | Anadón A et al., Oral bioavailability, tissue distributi…, Food and chemical toxicolog… (2008) | [10.1016/j.fct.2007.09.086](https://doi.org/10.1016/j.fct.2007.09.086) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.5). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (sheep), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">sheep</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Delmas_1997_reference](drugs/drug_flumequine/Flumequine_Delmas1997_reference.md) | — | 1-compartment (no model) | 0 | Delmas JM et al., Pharmacokinetics of flumequine in sheep…, Journal of veterinary pharm… (1997) | [10.1046/j.1365-2885.1997.00067.x](https://doi.org/10.1046/j.1365-2885.1997.00067.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.25). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cattle</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Mevius_1990_reference](drugs/drug_flumequine/Flumequine_Mevius1990_reference.md) | — | 1-compartment (no model) | 4 | Mevius DJ et al., Pharmacokinetics, metabolism and renal…, Journal of veterinary pharm… (1990) | [10.1111/j.1365-2885.1990.tb00764.x](https://doi.org/10.1111/j.1365-2885.1990.tb00764.x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Lützhøft_1999_growth_rate](drugs/drug_flumequine/pd_L_tzh_ft_1999_growth_rate.md) | growth rate ← flumequine · inhibition effect | — | Lützhøft HH et al., Algal toxicity of antibacterial agents…, Archives of environmental c… (1999) | [10.1007/s002449900435](https://doi.org/10.1007/s002449900435) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [van_2010_F_v_F_m](drugs/drug_flumequine/pd_van_2010_F_v_F_m.md) | Inhibition of photosynthetic yield (F v /F m) biomarker turnover ← flumequine | — | van der Grinten E et al., Comparing the sensitivity of algal, cya…, Chemosphere (2010) | [10.1016/j.chemosphere.2010.04.011](https://doi.org/10.1016/j.chemosphere.2010.04.011) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=flumequine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP1A2` inhibitor | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 39 matched, 38 returned
- **screened:** 7  ·  **relevant:** 6
- **records:** 4  ·  extracted 0  ·  needs_review 1  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_14 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Anadón_2008.pdf` | Anadón A et al., Oral bioavailability, tissue distributi…, Food and chemical toxicolog… (2008) | popPK | 10 | [10.1016/j.fct.2007.09.086](https://doi.org/10.1016/j.fct.2007.09.086) | [17950971](https://pubmed.ncbi.nlm.nih.gov/17950971) | The study reports quantitative PK parameters (half-life, MRT, Tmax, F) for flumequine in chickens. |
| `Delmas_1997.pdf` | Delmas JM et al., Pharmacokinetics of flumequine in sheep…, Journal of veterinary pharm… (1997) | popPK | 10 | [10.1046/j.1365-2885.1997.00067.x](https://doi.org/10.1046/j.1365-2885.1997.00067.x) | [9280363](https://pubmed.ncbi.nlm.nih.gov/9280363) | The study provides explicit quantitative pharmacokinetic parameters (Vdss, Vdlambda3, half-life, absorption fraction) for flumequine in sheep within the provided text. |
| `Mevius_1990.pdf` | Mevius DJ et al., Pharmacokinetics, metabolism and renal…, Journal of veterinary pharm… (1990) | popPK | 10 | [10.1111/j.1365-2885.1990.tb00764.x](https://doi.org/10.1111/j.1365-2885.1990.tb00764.x) | [2384907](https://pubmed.ncbi.nlm.nih.gov/2384907) | The study reports quantitative two-compartment PK parameters (Vd, Cl, t1/2) for flumequine in veal calves with specific numeric values provided in the text. |
| `Mevius_1991.pdf` | Mevius DJ et al., Effects of experimentally induced Paste…, Journal of veterinary pharm… (1991) | popPK | 10 | [10.1111/j.1365-2885.1991.tb00820.x](https://doi.org/10.1111/j.1365-2885.1991.tb00820.x) | [1920605](https://pubmed.ncbi.nlm.nih.gov/1920605) | The study reports quantitative pharmacokinetic parameters (clearance, volume, bioavailability, AUC) for flumequine in dairy calves with numeric values provided in the text. |
| `Ziv_1986.pdf` | Ziv G et al., Clinical pharmacokinetics of flumequine…, Journal of veterinary pharm… (1986) | popPK | 10 | [10.1111/j.1365-2885.1986.tb00027.x](https://doi.org/10.1111/j.1365-2885.1986.tb00027.x) | [3522937](https://pubmed.ncbi.nlm.nih.gov/3522937) | The paper reports specific numeric pharmacokinetic parameters (half-lives, volume of distribution, bioavailability) for flumequine in calves based on a two-compartment model. |
| `Xu_2016.pdf` | Xu N et al., Pharmacokinetics and bioavailability of…, Journal of veterinary pharm… (2016) | popPK | 9 | [10.1111/jvp.12261](https://doi.org/10.1111/jvp.12261) | [26411430](https://pubmed.ncbi.nlm.nih.gov/26411430) | The study reports quantitative pharmacokinetic parameters (half-lives, AUC, Cmax) for flumequine in fish, though specific values for clearance and volume are not explicitly listed in the evidence. |
| `Ferraresi_2013.pdf` | Ferraresi C et al., Pharmacokinetic/pharmacodynamic evaluat…, Poultry science (2013) | pd | 5 | [10.3382/ps.2013-03460](https://doi.org/10.3382/ps.2013-03460) | [24235225](https://www.ncbi.nlm.nih.gov/pubmed/24235225) | metadata signals extractable PD data (PK/PD) |
| `Tolosi_2021.pdf` | Tolosi R et al., Delayed toxicity of three fluoroquinolo…, Ecotoxicology and environme… (2021) | pd | 5 | [10.1016/j.ecoenv.2021.112778](https://doi.org/10.1016/j.ecoenv.2021.112778) | [34537589](https://www.ncbi.nlm.nih.gov/pubmed/34537589) | metadata signals extractable PD data (EC50) |
| `Ayub_2017.pdf` | Ayub MA et al., Variation in Phenolic Profile, β-Carote…, Chemistry & biodiversity (2017) | pd | 4 | [10.1002/cbdv.201600463](https://doi.org/10.1002/cbdv.201600463) | [28299905](https://www.ncbi.nlm.nih.gov/pubmed/28299905) | metadata signals extractable PD data (IC50) |
| `Lalumera_2004.pdf` | Lalumera GM et al., Preliminary investigation on the enviro…, Chemosphere (2004) | pd | 4 | [10.1016/j.chemosphere.2003.08.001](https://doi.org/10.1016/j.chemosphere.2003.08.001) | [14599512](https://www.ncbi.nlm.nih.gov/pubmed/14599512) | metadata signals extractable PD data (EC50) |
| `Lützhøft_1999.pdf` | Lützhøft HH et al., Algal toxicity of antibacterial agents…, Archives of environmental c… (1999) | pd | 4 | [10.1007/s002449900435](https://doi.org/10.1007/s002449900435) | [9828255](https://www.ncbi.nlm.nih.gov/pubmed/9828255) | metadata signals extractable PD data (EC50) |
| `Robinson_2005.pdf` | Robinson AA et al., Toxicity of fluoroquinolone antibiotics…, Environmental toxicology an… (2005) | pd | 4 | [10.1897/04-210r.1](https://doi.org/10.1897/04-210r.1) | [15720004](https://www.ncbi.nlm.nih.gov/pubmed/15720004) | metadata signals extractable PD data (EC50) |
| `Van_2004.pdf` | Van Coillie E et al., Development of an indirect competitive…, Journal of agricultural and… (2004) | pd | 4 | [10.1021/jf049593d](https://doi.org/10.1021/jf049593d) | [15291461](https://www.ncbi.nlm.nih.gov/pubmed/15291461) | metadata signals extractable PD data (IC50) |
| `Zounková_2011.pdf` | Zounková R et al., Complex evaluation of ecotoxicity and g…, Environmental toxicology an… (2011) | pd | 4 | [10.1002/etc.486](https://doi.org/10.1002/etc.486) | [21312248](https://www.ncbi.nlm.nih.gov/pubmed/21312248) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-14T22:55:52.511698+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Carballeira_2012 | irrelevant | 0 | 0 | This is a toxicity study (sea urchin embryo bioassay) reporting EC50 values, not a pharmacokinetic study with disposition parameters like clearance or volume. |
| popPK | EFSA_2021 | irrelevant | 0 | 0 | The paper is a regulatory risk assessment methodology for antimicrobial cross-contamination in feed and does not report original pharmacokinetic parameter values for flumequine. |
| popPK | Ferraresi_2013 | irrelevant | 0 | 0 | no_text gate: only 110 chars of text extracted (&lt; 400) |
| popPK | Giraud_2004 | irrelevant | 0 | 0 | The study focuses on resistance mechanisms (MICs, gene sequencing) in bacteria, not the pharmacokinetics of flumequine in an organism. |
| popPK | Hernando_2007 | irrelevant | 0 | 0 | The study is a toxicity evaluation using the Vibrio fischeri test and reports no pharmacokinetic parameters for flumequine. |
| popPK | Koutsoviti-Papadopoulou_1995 | irrelevant | 0 | 0 | The study investigates pharmacodynamic effects (GABA inhibition) on guinea pig ileum, not pharmacokinetic parameters. |
| PGx | Kuroda_2013 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (flumequine affecting MeIQx mutagenicity/metabolism) in wild-type mice, not a pharmacogenomic effect caused by a specific gene variant/genotype. |
| popPK | Lalumera_2004 | irrelevant | 0 | 0 | The study is an environmental monitoring and ecotoxicology investigation regarding antibiotic concentrations in sediments, not a pharmacokinetic study of flumequine in a subject. |
| popPK | Lützhøft_1999 | irrelevant | 0 | 0 | The study investigates the algal toxicity (EC50 values) of flumequine, not its pharmacokinetic disposition parameters. |
| popPK | Robinson_2005 | irrelevant | 0 | 0 | The paper reports ecotoxicity (EC50/NOEC) values for aquatic organisms, not pharmacokinetic parameters (CL, V, etc.) for flumequine. |
| popPK | Swinkels_2024 | irrelevant | 0 | 0 | The study focuses on antimicrobial resistance mechanisms and MICs in E. coli, not on the pharmacokinetic disposition parameters (CL, V, etc.) of flumequine. |
| popPK | Tolosi_2021 | irrelevant | 0 | 0 | no_text gate: only 116 chars of text extracted (&lt; 400) |
| popPK | Zounková_2011 | irrelevant | 0 | 0 | The paper is an ecotoxicology study reporting EC50 values in model organisms, not a pharmacokinetic study with disposition parameters. |
| popPK | van_2010 | irrelevant | 0 | 0 | This is an ecological toxicity study comparing bioassays (algae, bacteria) and reports EC50 values, not pharmacokinetic parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 22:55 UTC</sub>
