<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;artenimol&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Artenimol_Ding2024_reference&quot;,&quot;label&quot;:&quot;Ding_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_artenimol/Artenimol_Ding2024_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Lohy_2017_PARA&quot;,&quot;label&quot;:&quot;Lohy_2017 \u00b7 PARA&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_artenimol/pd_Lohy_2017_PARA.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# artenimol

- **generic name:** artenimol
- **ATC codes:** `P01BE05`, `P01BF05`
- **DrugBank:** [DB11638](https://go.drugbank.com/drugs/DB11638) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Artenimol (dihydroartemisinin) is an antimalarial medicine used to treat malaria. It is used both alone and in combination with other antimalarials, and is approved in some regions while still being studied for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5276420](https://www.wikidata.org/wiki/Q5276420) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| artenimol (dihydroartemisinin) | parent | 284.352 | C15H24O5 | PubChem | [3000518](https://pubchem.ncbi.nlm.nih.gov/compound/3000518) | Chotsiri_2017, Kang_2024 |
| artesunate | metabolite | 384.425 | C19H28O8 | PubChem | [6917864](https://pubchem.ncbi.nlm.nih.gov/compound/6917864) | Kang_2024 |
| dihydroartemisinin (artenimol) | metabolite | 284.352 | C15H24O5 | PubChem | [107770](https://pubchem.ncbi.nlm.nih.gov/compound/107770) | Chotsiri_2017 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 20:02 | 1:14:34 | 1/1/1 | 5/0/4 | 0/0/1 | 1,313,364/25,872 | einfracz / qwen3.8-27b | 81 | 6/63 | 81/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Ding_2024_reference](drugs/drug_artenimol/Artenimol_Ding2024_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Ding J et al., Population pharmacokinetics of amodiaqu…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13211](https://doi.org/10.1002/psp4.13211) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.727). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q49 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Kang_2024_reference](drugs/drug_artenimol/Artenimol_Kang2024_reference.md) | — | parent + metabolite (no model) | 10 | Kang DW et al., Inter-Species Pharmacokinetic Modeling…, International journal of mo… (2024) | [10.3390/ijms25136998](https://doi.org/10.3390/ijms25136998) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.429). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Chotsiri_2017_reference](drugs/drug_artenimol/Artenimol_Chotsiri2017_reference.md) | — | 1-compartment (no model) | 0 | Chotsiri P et al., Population pharmacokinetics and electro…, British journal of clinical… (2017) | [10.1111/bcp.13372](https://doi.org/10.1111/bcp.13372) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Alin_1990_Growth_inhibition](drugs/drug_artenimol/pd_Alin_1990_Growth_inhibition.md) | Growth inhibition ← dihydroartemisinin · direct sigmoid Emax (Hill) effect | — | Alin MH et al., In vitro activity of artemisinin, its d…, Transactions of the Royal S… (1990) | [10.1016/0035-9203(90)90129-3](https://doi.org/10.1016/0035-9203(90)90129-3) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Gendrot_2020_SARS_CoV_2_replication](drugs/drug_artenimol/pd_Gendrot_2020_SARS_CoV_2_replication.md) | SARS-CoV-2 replication ← Dihydroartemisinin · direct sigmoid Emax (Hill) effect | — | Gendrot M et al., Antimalarial drugs inhibit the replicat…, Travel medicine and infecti… (2020) | [10.1016/j.tmaid.2020.101873](https://doi.org/10.1016/j.tmaid.2020.101873) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Gibbons_2007_Parasite_density](drugs/drug_artenimol/pd_Gibbons_2007_Parasite_density.md) | Parasite density ← dihydroartemisinin · inhibition effect | — | Gibbons PL et al., Development of a pharmacodynamic model…, International journal for p… (2007) | [10.1016/j.ijpara.2007.05.001](https://doi.org/10.1016/j.ijpara.2007.05.001) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Lohy_2018_2_PARA](drugs/drug_artenimol/pd_Lohy_2018_2_PARA.md) | Total circulating parasite biomass ← dihydroartemisinin · delayed effect through an effect compartment | — | Lohy Das JP et al., Population pharmacokinetic and pharmaco…, Malaria journal (2018) | [10.1186/s12936-018-2278-5](https://doi.org/10.1186/s12936-018-2278-5) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Zaloumis_2012_P](drugs/drug_artenimol/pd_Zaloumis_2012_P.md) | Parasite count ← dihydroartemisinin · direct Emax (saturable) effect | — | Zaloumis S et al., Assessing the utility of an anti-malari…, Malaria journal (2012) | [10.1186/1475-2875-11-303](https://doi.org/10.1186/1475-2875-11-303) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Lohy_2017_PARA](drugs/drug_artenimol/pd_Lohy_2017_PARA.md) | Total baseline circulating parasite biomass ← Dihydroartemisinin · direct sigmoid Emax (Hill) effect | ▶ model + simulator | Lohy Das J et al., Population Pharmacokinetic and Pharmaco…, The AAPS journal (2017) | [10.1208/s12248-017-0141-1](https://doi.org/10.1208/s12248-017-0141-1) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Mim_2026_PAR](drugs/drug_artenimol/pd_Mim_2026_PAR.md) | parasitemia ← artenimol · indirect response — drug inhibits the production of parasitemia | model (no simulator) | Mim SR et al., Pharmacokinetic and pharmacodynamic mod…, Antimicrobial agents and ch… (2026) | [10.1128/aac.01717-25](https://doi.org/10.1128/aac.01717-25) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Patel_2013_parasitemia](drugs/drug_artenimol/pd_Patel_2013_parasitemia.md) | parasitemia ← dihydroartemisinin · indirect response — drug inhibits the production of parasitemia | model (no simulator) | Patel K et al., Mechanism-based model of parasite growt…, Antimicrobial agents and ch… (2013) | [10.1128/AAC.01463-12](https://doi.org/10.1128/AAC.01463-12) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Patel_2014_parasite_density](drugs/drug_artenimol/pd_Patel_2014_parasite_density.md) | parasite density ← dihydroartemisinin · indirect response — drug inhibits the production of parasite density | model (no simulator) | Patel K et al., Predicting the parasite killing effect…, The Journal of antimicrobia… (2014) | [10.1093/jac/dku120](https://doi.org/10.1093/jac/dku120) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **CYP2B6** | `Q27` · CL/F | metabolism | [Abdullahi_2020](drugs/drug_artenimol/pgx_Abdullahi_2020_CYP2B6_Q27.md) | Abdullahi ST et al., CYP2B6*6 Genotype Specific Differences…, Journal of clinical pharmac… (2020) | [10.1002/jcph.1527](https://doi.org/10.1002/jcph.1527) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=artenimol).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| distribution | blood | `ALB` target | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | kidney | `UGT1A9` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | liver | `CYP2B6` metabolism, `CYP2C19` inhibitor, `CYP2D6` inhibitor, `UGT1A9` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | small intestine | `UGT2B7` substrate | DrugBank actor |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ACTG1 (target), ALDH7A1 (target), ALDOA (target), ANXA2 (target), ATP5F1A (target), ATP5MG (target), ATP5PO (target), CAST (target), CCT3 (target), CFL1 (target), CLIC1 (target), CSRP1 (target), CYCS (target), DDX39B (target), DDX5 (target), DPYSL2 (target), DSP (target), EEF1A1 (target), ENO1 (target), FLNA (target), FTO (target), G6PD (target), GAPDH (target), GAPDHS (target), GPI (target), HNRNPA2B1 (target), HNRNPD (target), HNRNPK (target), HP1BP3 (target), HSPA8 (target), HSPB1 (target), IQGAP1 (target), KHSRP (target), LDHA (target), LDHB (target), LGALS1 (target), MAP4 (target), MDH1 (target), MYH9 (target), NPEPPS (target), NPM1 (target), P4HB (target), PFN1 (target), PGAM1 (target), PGK1 (target), PKM (target), PPIA (target), PRDX1 (target), RPL10 (target), RPL14 (target), RPL18 (target), RPL23A (target), RPL35 (target), RPL4 (target), RPS13 (target), RPS17 (target), RPS18 (target), RPS19 (target), RPS28 (target), RPS5 (target), RPS6 (target), RPS8 (target), RPS9 (target), SF1 (target), SFPQ (target), SHMT2 (target), SNRPD2 (target), SRP14 (target), SRSF4 (target), TAGLN (target), TAGLN2 (target), TPI1 (target), TPM1 (target), TUBA1A (target), TUBB (target), TUBB4A (target), TUBB6 (target), VIM (target), ZYX (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 955 matched, 204 returned
- **screened:** 2  ·  **relevant:** 0
- **records:** 3  ·  extracted 1  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_11 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bergstrand_2014.pdf` | Bergstrand M et al., Characterization of an in vivo concentr…, Science translational medic… (2014) | pd | 5 | [10.1126/scitranslmed.3005311](https://doi.org/10.1126/scitranslmed.3005311) | [25355697](https://www.ncbi.nlm.nih.gov/pubmed/25355697) | metadata signals extractable PD data (concentration-effect) |
| `Moore_2015.pdf` | Moore BR et al., Pharmacokinetics of piperaquine transfe…, Antimicrobial agents and ch… (2015) | pd | 5 | [10.1128/AAC.00327-15](https://doi.org/10.1128/AAC.00327-15) | [25963980](https://www.ncbi.nlm.nih.gov/pubmed/25963980) | metadata signals extractable PD data (sigmoid) |
| `Patel_2014.pdf` | Patel K et al., Predicting the parasite killing effect…, The Journal of antimicrobia… (2014) | pd | 5 | [10.1093/jac/dku120](https://doi.org/10.1093/jac/dku120) | [24777899](https://www.ncbi.nlm.nih.gov/pubmed/24777899) | metadata signals extractable PD data (turnovermodel) |
| `Vanachayangkul_2017.pdf` | Vanachayangkul P et al., Piperaquine Population Pharmacokinetics…, Antimicrobial agents and ch… (2017) | pd | 5 | [10.1128/AAC.02000-16](https://doi.org/10.1128/AAC.02000-16) | [28193647](https://www.ncbi.nlm.nih.gov/pubmed/28193647) | metadata signals extractable PD data (exposure-response) |
| `Wang_2024.pdf` | Wang H et al., Dihydroartemisinin inhibited vasculogen…, Phytomedicine : internation… (2024) | pd | 4 | [10.1016/j.phymed.2024.155962](https://doi.org/10.1016/j.phymed.2024.155962) | [39214017](https://www.ncbi.nlm.nih.gov/pubmed/39214017) | metadata signals extractable PD data (IC50) |
| `Elewa_2017.pdf` | Elewa H et al., A Review of Pharmacogenetics of Antimal…, European journal of drug me… (2017) | pgx | 8 | [10.1007/s13318-016-0399-1](https://doi.org/10.1007/s13318-016-0399-1) | [28070879](https://www.ncbi.nlm.nih.gov/pubmed/28070879) | metadata signals extractable PGX data (CYP2C8, PK/PD-context) |
| `Honda_2011.pdf` | Honda M et al., Functional characterization of CYP2B6 a…, Drug metabolism and disposi… (2011) | pgx | 8 | [10.1124/dmd.111.040352](https://doi.org/10.1124/dmd.111.040352) | [21746968](https://www.ncbi.nlm.nih.gov/pubmed/21746968) | metadata signals extractable PGX data (CYP2B6, PK/PD-context) |
| `Piedade_2011.pdf` | Piedade R et al., The pharmacogenetics of antimalaria art…, Expert opinion on drug meta… (2011) | pgx | 8 | [10.1517/17425255.2011.608660](https://doi.org/10.1517/17425255.2011.608660) | [21899476](https://www.ncbi.nlm.nih.gov/pubmed/21899476) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Kakuda_2013.pdf` | Kakuda TN et al., Pharmacokinetic interaction between etr…, HIV medicine (2013) | pgx | 7 | [10.1111/hiv.12019](https://doi.org/10.1111/hiv.12019) | [23441978](https://www.ncbi.nlm.nih.gov/pubmed/23441978) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Lefèvre_2002.pdf` | Lefèvre G et al., Pharmacokinetics and electrocardiograph…, British journal of clinical… (2002) | pgx | 7 | [10.1046/j.1365-2125.2002.01696.x](https://doi.org/10.1046/j.1365-2125.2002.01696.x) | [12445027](https://www.ncbi.nlm.nih.gov/pubmed/12445027) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `van_1999.pdf` | van Agtmael MA et al., Grapefruit juice increases the bioavail…, European journal of clinica… (1999) | pgx | 7 | [10.1007/s002280050648](https://doi.org/10.1007/s002280050648) | [10456492](https://www.ncbi.nlm.nih.gov/pubmed/10456492) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-14T19:55:03.388443+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adehin_2026 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of artesunate and its metabolite dihydroartemisinin, not artenimol. |
| PGx | Adika_2025 | not_relevant | 0 | 0 | The paper studies Plasmodium falciparum drug resistance (parasite genotypes) and does not report human pharmacogenomics or PK/PD parameters for artenimol. |
| popPK | Ali_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of piperaquine (a component of dihydroartemisinin-piperaquine) and its relationship with malaria risk and growth, but does not report quantitative pharmacokinetic parameters (CL, V, etc.) for artenimol. |
| popPK | Alin_1990 | irrelevant | 0 | 0 | The study reports in vitro anti-malarial activity (IC50/EC50) of artemisinin and derivatives, not pharmacokinetic parameters of artenimol. |
| PGx | Amusan_2025 | not_relevant | 0 | 0 | The paper investigates mutations in the parasite gene Pfkelch13 (drug target/resistance), not human gene variants affecting the pharmacokinetics or pharmacodynamics of artenimol. |
| PGx | Asimus_2007 | not_relevant | 0 | 0 | The study does not examine the effect of a specific genetic variant on the pharmacokinetics or pharmacodynamics of artenimol. |
| popPK | Banda_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of dolutegravir, with dihydroartemisinin/piperaquine acting as a co-administered drug; artenimol is not the subject of the PK analysis. |
| PGx | Bastiaens_2018 | not_relevant | 0 | 0 | The paper assesses the safety of primaquine in G6PD-deficient individuals; it does not report PK/PD effects for artenimol. |
| popPK | Bergstrand_2014 | irrelevant | 0 | 0 | The study focuses on the concentration-effect relationship and pharmacokinetics of piperaquine, not artenimol. |
| PGx | Bonnington_2025 | not_relevant | 0 | 0 | The paper evaluates the efficacy of SMC drugs in a general pediatric population and does not report pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Bower-Lepts_2026 | not_relevant | 0 | 0 | The paper studies genetic resistance in the parasite (Plasmodium falciparum) to artemisinins and lumefantrine, not pharmacogenomic effects of human gene variants on the pharmacokinetics or pharmacodynamics of the drug artenimol. |
| popPK | Cao_2020 | irrelevant | 0 | 0 | The study is an in vitro evaluation of anti-SARS-CoV-2 activity and does not report population pharmacokinetic parameters for artenimol. |
| popPK | Chairat_2018 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for primaquine and its metabolite carboxyprimaquine, not artenimol. |
| popPK | Chan_2020 | irrelevant | 0 | 0 | The paper is a methodological review/guidance on using the PRIOR subroutine in NONMEM and does not report pharmacokinetic parameters for artenimol. |
| popPK | Cherkaoui-Rbati_2023 | irrelevant | 0 | 0 | The study models the PKPD of DSM265 (a DHODH inhibitor), not artenimol, and does not report pharmacokinetic parameters for artenimol. |
| popPK | Chotsiri_2017 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for dihydroartemisinin and piperaquine, not for artenimol. |
| popPK | Chotsiri_2019 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for piperaquine (a component of DHA-PQ), not for the drug artenimol. |
| popPK | Chotsiri_2021 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for piperaquine (a component of the combination therapy), not for artenimol. |
| popPK | Chotsiri_2022_2 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of primaquine and its metabolite, not artenimol. |
| PGx | Chu_2021 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetics of primaquine and the effect of CYP2D6 genotypes on primaquine concentrations, but it does not contain data or findings regarding the drug artenimol. |
| PGx | Cui_2012 | not_relevant | 1 | 1 | The study investigates a parasite mutation (PfATP6) affecting drug resistance (PD), not a human pharmacogenomic variant affecting the pharmacokinetics or pharmacodynamics of the drug. |
| popPK | Ding_2024 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for amodiaquine, desethylamodiaquine, and piperaquine, but contains no data for the target drug artenimol. |
| popPK | Ding_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for artemether, dihydroartemisinin, lumefantrine, and amodiaquine, but does not include data for artenimol. |
| popPK | Dongmo_2026 | irrelevant | 0 | 0 | The paper is a mathematical modeling study on ivermectin for malaria control and does not report pharmacokinetic parameters for artenimol. |
| PGx | Elewa_2017 | not_relevant | 0 | 0 | The review mentions artemisinin derivatives (artesunate/dihydroartemisinin) but does not contain any information regarding the pharmacokinetics of artenimol. |
| PGx | Elsherbiny_2008 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (induction of CYP enzymes by artemisinins) rather than the effect of a genetic variant on the PK/PD of artenimol. |
| popPK | Fröhlich_2018 | irrelevant | 0 | 0 | The paper describes the synthesis and in-vitro biological activity (EC50) of hybrid compounds, not pharmacokinetic parameters for artenimol. |
| popPK | Fröhlich_2018_2 | irrelevant | 0 | 0 | The paper is an in-vitro medicinal chemistry study on artemisinin-estrogen hybrids reporting biological activity (EC50), not pharmacokinetic parameters for artenimol. |
| popPK | Fröhlich_2020 | irrelevant | 0 | 0 | The paper reports in-vitro anticancer synthesis and activity (EC50) of artemisinin hybrids, containing no pharmacokinetic parameters for artenimol. |
| popPK | Gendrot_2020 | irrelevant | 0 | 0 | The paper is an in-vitro antiviral study of antimalarial drugs against SARS-CoV-2 and does not report pharmacokinetic parameters for artenimol (which is not even mentioned, likely a typo for artemisinin derivatives in general context, but certainly not a PK study). |
| popPK | Gendrot_2021 | irrelevant | 0 | 0 | The paper is an in-vitro antiviral study of methylene blue against SARS-CoV-2 and does not report pharmacokinetic parameters for artenimol. |
| popPK | Gibbons_2007 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects of dihydroartemisinin (a different drug) on malaria parasite density in mice, without reporting population pharmacokinetic parameters for artemisinin. |
| PGx | Gnondjui_2024 | not_relevant | 0 | 0 | The paper studies the pharmacodynamic effect of human Hb genotypes on the susceptibility of *P. falciparum* to dihydroartemisinin, not the effect of a patient's genotype on the PK/PD of the drug 'artenimol' itself in the patient. |
| popPK | Grazzia_2021 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of antiparasitic activity and does not report pharmacokinetic parameters for artenimol or its derivatives. |
| popPK | Guidi_2019 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of artesunate (and its metabolite dihydroartemisinin) and mefloquine, not artenimol. |
| popPK | Haghiri_2023 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for Artesunate and its metabolite Dihydroartemisinin, not for the requested drug Artimomol (also known as Artimomol or Arsenomol, distinct from Artemisinin derivatives). |
| PGx | Haq_2009 | not_relevant | 0 | 0 | The paper is a clinical case report of a psychiatric adverse event (mania) caused by alpha/beta-arteether, with no quantitative reporting of a gene variant/genotype effect on a PK or PD parameter. |
| popPK | Hassan_1992 | irrelevant | 0 | 0 | The paper is an in vitro efficacy study of antimalarials against Plasmodium falciparum, reporting EC50 values for antimicrobial activity rather than pharmacokinetic disposition parameters for artenimol. |
| popPK | He_2021 | irrelevant | 0 | 0 | The study focuses on the synthesis and anti-depressant mechanism of dihydro-artemisinin conjugates in PC12 cells, reporting no pharmacokinetic parameters (CL, V, t1/2, etc.) for artenimol. |
| popPK | Hendriksen_2013 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for artesunate (ARS) and its metabolite dihydroartemisinin (DHA), not artenimol. |
| popPK | Hoglund_2017 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for piperaquine, not artenimol. |
| popPK | Hoglund_2026 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of ivermectin (and its metabolites), not artenimol. |
| popPK | Huang_2022 | irrelevant | 0 | 0 | The study evaluates the in vitro anti-parasitic efficacy and mechanism of action (ferroptosis) of dihydroartemisinin against Toxoplasma gondii, but does not report any pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Hughes_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of piperaquine and QTc interval effects, not artenimol. |
| popPK | Huo_1991 | irrelevant | 0 | 0 | The paper studies artesunate, not artenimol, which is a different artemisinin derivative. |
| PGx | Kakuda_2013 | not_relevant | 0 | 0 | The study investigates drug-drug interactions, not pharmacogenomic effects, and involves artemether rather than artenimol. |
| popPK | Kang_2024 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for artesunate, dihydroartemisinin, and pyronaridine, but does not measure or report parameters for the specific drug artenimol. |
| popPK | Karunajeewa_2008 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of piperaquine and chloroquine, not artenimol. |
| PGx | Kheng_2015 | not_relevant | 0 | 0 | The paper studies primaquine, not artenimol. |
| popPK | Kloprogge_2018 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for lumefantrine and artemether, not artenimol, which is not the subject drug. |
| popPK | Kouakou_2019 | irrelevant | 0 | 0 | The paper is a systematic review of artesunate and dihydroartemisinin pharmacokinetics, which are different chemical entities than artenimol, and it does not report original quantitative PK parameters for artenimol. |
| PGx | Kredo_2016 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (CYP3A4 inhibition by ritonavir), not a pharmacogenomic effect of a specific gene variant. |
| PGx | Lefèvre_2002 | not_relevant | 0 | 0 | The paper studies drug-drug interaction with ketoconazole, not pharmacogenomic effects. |
| popPK | Lesmana_2025 | irrelevant | 0 | 0 | The paper is an epidemiological study of recurrent malaria cases and does not report any pharmacokinetic parameters for artenimol. |
| PGx | Liu_2025 | not_relevant | 0 | 0 | The paper reports in vitro antitumor activity and in silico ADME predictions for novel hybrids, containing no pharmacogenomic data or actual pharmacokinetic/pharmacodynamic measurements of artenimol. |
| popPK | Lohy_2017 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of artesunate and dihydroartemisinin, not artenimol. |
| popPK | Lohy_2018 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of artemether, dihydroartemisinin, and lumefantrine, not artenimol. |
| popPK | Lohy_2018_2 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of artesunate and dihydroartemisinin, not artenimol. |
| popPK | Maiga_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics (parasite killing rates, Emax, lag phase) of four antimalarial drugs (including dihydroartemisinin) in vitro, not the pharmacokinetics of artenimol. |
| PGx | Mairet-Khedim_2021 | not_relevant | 0 | 0 | The study investigates the molecular markers (Kelch13, Plasmepsin2) of drug resistance in *Plasmodium falciparum* parasites, not human pharmacogenomic variants affecting the pharmacokinetics or pharmacodynamics of artemisinin/piperaquine. |
| popPK | Mansouri_2026 | irrelevant | 0 | 0 | The paper is a review on botanical adjuvants for breast cancer and does not report any pharmacokinetic parameters for artenimol. |
| PGx | Mbye_2020 | not_relevant | 0 | 0 | The paper investigates parasite drug tolerance to dihydroartemisinin (not artenimol) and does not report human pharmacogenomic effects on drug pharmacokinetics or pharmacodynamics. |
| popPK | McGready_2006 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of dihydroartemisinin (DHA) and artesunate, not artenimol. |
| popPK | Millat-Martínez_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of piperaquine, not artenimol, and artenimol is not the subject drug for PK parameter extraction. |
| popPK | Mim_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of mefloquine and artesunate, not artenimol. |
| PGx | Mohamed_2020 | not_relevant | 0 | 0 | The paper focuses on P. falciparum drug resistance markers and does not report on human pharmacogenomic variants affecting the pharmacokinetics or pharmacodynamics of artenimol. |
| popPK | Moore_2015 | irrelevant | 0 | 0 | The study examines the pharmacokinetics of piperaquine in breast milk, not artenimol. |
| PGx | Mukaka_2023 | not_relevant | 0 | 0 | The paper investigates the pharmacogenetics of primaquine (CYP2D6), not artenimol, and reports PK/PD parameters for the drug primaquine. |
| PGx | Muwanguzi_2016 | not_relevant | 0 | 0 | The paper investigates a pathogen's genetic variant (P. falciparum pfk13), not a human pharmacogenomic variant, and does not report pharmacokinetic or pharmacodynamic parameters for the drug artenimol. |
| popPK | Nakijoba_2025 | irrelevant | 0 | 0 | The paper is a cross-sectional survey on medication practices during breastfeeding and does not report any pharmacokinetic parameters for artenimol. |
| PGx | Niaré_2026 | not_relevant | 0 | 0 | The paper reports parasite genetics (PX1, K13) affecting drug susceptibility in malaria, not human pharmacogenomics for artenimol. |
| popPK | Noedl_2001 | irrelevant | 0 | 0 | The study reports in vitro antimalarial activity (EC50/EC90) of azithromycin and artemisinin derivatives, not the pharmacokinetic disposition of artenimol. |
| PGx | Noedl_2010 | not_relevant | 0 | 0 | The paper investigates parasite drug resistance and pharmacokinetics of dihydroartemisinin, but does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of the specific drug 'artenimol'. |
| PGx | ONeill_2017 | not_relevant | 2 | 0 | The paper discusses a new antimalarial drug candidate (E209) and its resistance profile against parasite K13 mutations, but does not report human pharmacogenomic effects on the PK or PD of artenimol. |
| popPK | Pang_2025 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of NATTERIN in mice and uses dihydroartemisinin (DHA) only as a pharmacological agent to inhibit TFR1, not as the subject of PK analysis. |
| popPK | Parkinson_2019 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of a new thiosemicarbazone antimalarial (TSC3), not artenimol. |
| popPK | Patel_2013 | irrelevant | 1 | 1 | The study focuses on dihydroartemisinin (a metabolite), not artenimol, and is therefore not a study of the target drug. |
| popPK | Patel_2014 | irrelevant | 0 | 0 | The study focuses on dihydroartemisinin and piperaquine in mice, not the specific drug artenimol. |
| popPK | Pfaffendorf_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for fosmidomycin and clindamycin, which are co-administered with artesunate, but does not report parameters for artenimol. |
| PGx | Piedade_2011 | not_relevant | 2 | 1 | The paper is a narrative review discussing the general role of CYP450 enzymes in ACT metabolism but does not report specific genotype-dependent changes in the PK/PD parameters of artenimol. |
| PGx | Platon_2024 | not_relevant | 0 | 0 | The study investigates parasite mechanisms of drug resistance and environmental response to artemisinin, not human pharmacogenomics. |
| PGx | Rahmasari_2022 | not_relevant | 0 | 0 | The paper is a systematic review of *Plasmodium* parasite genetic mutations (drug resistance) and does not discuss human pharmacogenomics or how human gene variants affect the PK/PD of artenimol. |
| popPK | Ramadan_2026 | irrelevant | 0 | 0 | The paper is a systematic review and meta-analysis of ivermectin for malaria vector control and does not report pharmacokinetic parameters for artenimol. |
| popPK | Ramharter_2003 | irrelevant | 0 | 0 | This is an in vitro study evaluating the antimalarial activity and drug interaction of clindamycin and dihydroartemisinin, not a pharmacokinetic study for artenimol. |
| popPK | Rattanapunya_2015 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of artesunate (and its metabolite dihydroartemisinin), mefloquine, lopinavir, and ritonavir; artenimol is not the subject drug. |
| popPK | Salman_2011 | irrelevant | 0 | 0 | The study reports pharmacokinetics for artemether and lumefantrine, not artenimol. |
| popPK | Salman_2012 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of piperaquine and artemisinin/artemether, not artenimol. |
| popPK | Sambol_2015 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of piperaquine (co-administered with dihydroartemisinin), not artenimol. |
| popPK | Sambol_2016 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of piperaquine and dihydroartemisinin, not artenimol. |
| popPK | Santos_2024 | irrelevant | 0 | 0 | The paper is a review of pharmacokinetic models for tafenoquine, not artenimol. |
| popPK | Saunders_2012 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of artesunate and its metabolite dihydroartemisinin (DHA), not artenimol. |
| PGx | Shanks_2006 | not_relevant | 0 | 0 | The paper discusses drug resistance and treatment policies for malaria but does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Sharma_2014 | irrelevant | 0 | 0 | The paper investigates the antiviral efficacy of artesunate (a different drug) on JC polyomavirus in vitro, and does not report pharmacokinetic parameters for artenimol. |
| PGx | Simwela_2020 | not_relevant | 0 | 0 | The paper reports on parasite resistance to artemisinin (not artenimol) and its reversal by proteasome inhibitors, focusing on the pharmacodynamics of the antimalarial combination rather than host pharmacogenomic effects. |
| popPK | Sinou_2008 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for artesunate and its metabolite dihydroartemisinin, not artenimol. |
| PGx | Sinou_2009 | not_relevant | 0 | 0 | The paper reports general PK/PD for an ACT formulation but does not analyze the effect of host gene variants on these parameters. |
| popPK | Skinner_1996 | irrelevant | 0 | 0 | The paper reports in vitro sensitivity (EC50) of Plasmodium falciparum to artemisinin drugs, not pharmacokinetic parameters of artenimol. |
| PGx | Staehli_2013 | not_relevant | 0 | 0 | The paper studies artemisinin-based therapies (artemether, artesunate, dihydroartemisinin), not artenimol, and found no significant pharmacogenetic effects. |
| popPK | Stepniewska_2009 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for artesunate, dihydroartemisinin, amodiaquine, and desethylamodiaquine, but contains no data for artenimol. |
| popPK | Stone_2022 | irrelevant | 0 | 0 | This is a clinical efficacy trial regarding malaria transmission reduction, not a pharmacokinetic study for the drug artenimol. |
| popPK | Sugiarto_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of artemether and lumefantrine, not artenimol. |
| PGx | Sugiarto_2022_2 | not_relevant | 0 | 0 | The paper reports a negative study on the effect of sickle cell genotype on artemether-lumefantrine, not artenimol. |
| popPK | Suresh_2025 | irrelevant | 0 | 0 | The study is a malaria transmission modeling paper that evaluates chemoprevention strategies, not a pharmacokinetic study for artenimol. |
| popPK | Tarning_2012 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of piperaquine, while artenimol is not the subject drug and no parameters are provided for it. |
| popPK | Tarning_2014 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of piperaquine, not artenimol. |
| popPK | Tarning_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of artemether, lumefantrine, and amodiaquine, not artenimol. |
| PGx | Taylor_2021 | not_relevant | 0 | 0 | The study investigates G6PD enzyme dynamics in response to malaria and primaquine, not the pharmacokinetics or pharmacodynamics of artenimol. |
| PGx | Tipthara_2025 | not_relevant | 0 | 0 | The paper reports drug-drug interactions (DDIs) affecting ivermectin metabolism in vitro, not pharmacogenomic effects on artenimol. |
| PGx | Tun_2016 | not_relevant | 0 | 0 | not captured |
| popPK | Turon_2025 | irrelevant | 0 | 0 | The paper discusses artemether and rifampicin (not artenimol) and focuses on pharmacogenetic prediction using PBPK models without providing specific quantitative PK parameter values for artenimol. |
| popPK | Vanachayangkul_2017 | irrelevant | 0 | 0 | no_text gate: only 70 chars of text extracted (&lt; 400) |
| popPK | Wallender_2018 | irrelevant | 0 | 0 | The study models the pharmacokinetics of piperaquine (PQ) and mentions dihydroartemisinin (DHA), but does not provide quantitative PK parameters for artenimol. |
| popPK | Wallender_2021 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for piperaquine, not artenimol. |
| popPK | Wattanakul_2021 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for piperaquine (and pharmacodynamic modeling for dihydroartemisinin), not for artenimol. |
| popPK | Xing_2012 | irrelevant | 0 | 0 | The study focuses on in vitro P450 inhibition and induction by artemisinin derivatives (QHS/DHA), not population pharmacokinetic parameters for artenimol. |
| popPK | Zaloumis_2012 | irrelevant | 0 | 0 | The study is a simulation of PK-PD models for anti-malarials (artesunate, artemether, etc.) and does not involve the drug artenimol. |
| PGx | Zatra_2012 | not_relevant | 0 | 0 | The paper reports in vitro drug susceptibility and parasite gene polymorphisms (Pfmdr1, Pfcrt) related to P. falciparum drug resistance, not pharmacogenomic effects on human PK/PD parameters for artenimol. |
| PGx | Zhang_2018_2 | not_relevant | 0 | 0 | The paper investigates antimalarial drug resistance markers in Plasmodium falciparum (parasite genotypes) rather than human pharmacogenomic variants affecting the PK/PD of the drug artenimol. |
| PGx | Zwang_2009 | not_relevant | 0 | 0 | The paper reports clinical efficacy and safety data for dihydroartemisinin-piperaquine but does not contain pharmacogenomic data or link gene variants to pharmacokinetic parameters. |
| popPK | van_1999 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of artemether, not artenimol. |
| PGx | van_1999 | not_relevant | 0 | 0 | The paper investigates the effect of grapefruit juice on artemether, not a pharmacogenomic variant, and the drug is not artenimol. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 19:49 UTC</sub>
