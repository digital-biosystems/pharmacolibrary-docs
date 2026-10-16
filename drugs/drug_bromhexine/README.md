<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R05C&quot;,&quot;href&quot;:&quot;atc/R05C.md&quot;},{&quot;label&quot;:&quot;bromhexine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Bromhexine_Behrens2026_reference&quot;,&quot;label&quot;:&quot;Behrens_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bromhexine/Bromhexine_Behrens2026_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Bromhexine_Gao2026_reference&quot;,&quot;label&quot;:&quot;Gao_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bromhexine/Bromhexine_Gao2026_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Bromhexine_Barzel2026_reference&quot;,&quot;label&quot;:&quot;Barzel_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bromhexine/Bromhexine_Barzel2026_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# bromhexine

- **generic name:** bromhexine
- **ATC codes:** `R05CB02`
- **DrugBank:** [DB09019](https://go.drugbank.com/drugs/DB09019) · **PubChem:** [CID 2442](https://pubchem.ncbi.nlm.nih.gov/compound/2442)
- **molar mass:** 376.13 g/mol (C14H20Br2N2) — DrugBank
- **groups:** approved

## About

Bromhexine is a mucolytic medicine used to treat cough by helping clear mucus from the airways. It is an approved drug, available in cough and cold preparations, though it is not authorised centrally in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q239778](https://www.wikidata.org/wiki/Q239778) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:48 | 17:26 | 2/1/1 | 1/1/0 | 0/0/0 | 915,638/33,084 | einfracz / qwen3.8-27b | 43 | 1/26 | 43/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.0). Primary extraction retained.">cross-check: disputed</span> | [Behrens_2026_reference](drugs/drug_bromhexine/Bromhexine_Behrens2026_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 | Behrens E et al., Prospective study of pharmacokinetics o…, Annals of intensive care (2026) | [10.1016/j.aicoj.2026.100082](https://doi.org/10.1016/j.aicoj.2026.100082) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.636). Primary extraction retained.">cross-check: partial</span> | [Gao_2026_reference](drugs/drug_bromhexine/Bromhexine_Gao2026_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 | Gao X et al., Population Pharmacokinetics of Trastuzu…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70259](https://doi.org/10.1002/psp4.70259) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: unreported model parameter default(s): k21</sub><br><sub>route_to: `scholar`</sub> | [Barzel_2026_reference](drugs/drug_bromhexine/Bromhexine_Barzel2026_reference.md) | ▶ model + simulator | 2-compartment, IV | 3 | Barzel I et al., Population Pharmacokinetic/Pharmacodyna…, Clinical pharmacokinetics (2026) | [10.1007/s40262-026-01636-2](https://doi.org/10.1007/s40262-026-01636-2) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.667). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Bechgaard_1982_reference](drugs/drug_bromhexine/Bromhexine_Bechgaard1982_reference.md) | — | 1-compartment (no model) | 0 | Bechgaard E et al., Bioavailability of bromhexine tablets a…, Biopharmaceutics & drug dis… (1982) | [10.1002/bdd.2510030407](https://doi.org/10.1002/bdd.2510030407) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Bergogne-Bérézin_1985_bronchial_serum_ratio_of_amoxycillin](drugs/drug_bromhexine/pd_Bergogne_B_r_zin_1985_bronchial_serum_ratio_of_amoxycillin.md) | bronchial/serum ratio of amoxycillin biomarker turnover ← bromhexine | — | Bergogne-Bérézin E et al., Influence of a fluidifying agent (bromh…, International journal of cl… (1985) | — |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 1.00).">in vitro</span> | [Kukita_1992_sorption_of_bromhexine_HCl](drugs/drug_bromhexine/pd_Kukita_1992_sorption_of_bromhexine_HCl.md) | sorption of bromhexine HCl ← bromhexine HCl · model not identified | — | Kukita T et al., Interaction between polyethylene films…, Chemical & pharmaceutical b… (1992) | [10.1248/cpb.40.3110](https://doi.org/10.1248/cpb.40.3110) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=bromhexine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ACE2 (binder), TMPRSS2 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 2217 matched, 70 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 4  ·  extracted 2  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Vandecasteele-Thienpont_1980.pdf` | Vandecasteele-Thienpont LM et al., Pharmacokinetics of bromhexine in the d…, Arzneimittel-Forschung (1980) | popPK | 9 | not captured | [7192102](https://pubmed.ncbi.nlm.nih.gov/7192102) | The paper is a pharmacokinetic study of bromhexine in dogs, but the abstract provided contains no quantitative parameter values (such as clearance, volume, or half-life). |
| `Bechgaard_1982.pdf` | Bechgaard E et al., Bioavailability of bromhexine tablets a…, Biopharmaceutics & drug dis… (1982) | popPK | 7 | [10.1002/bdd.2510030407](https://doi.org/10.1002/bdd.2510030407) | [6897618](https://pubmed.ncbi.nlm.nih.gov/6897618) | Reports quantitative PK parameters for bromhexine including half-life (6 h), bioavailability metrics, and a two-compartment model description, though clearance and volume values are not explicitly listed. |

<sub>queue written 2026-10-07T22:43:39.979873+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Anderson_2025 | irrelevant | 0 | 0 | The paper is a review focused exclusively on propofol pharmacokinetics and does not contain data for bromhexine. |
| popPK | Athanassa_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of minocycline, not bromhexine. |
| popPK | Bardol_2025 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of clonidine and midazolam; bromhexine is not mentioned or studied. |
| popPK | Barzel_2026 | irrelevant | 0 | 0 | The paper is a review of population PK models for enzyme replacement therapies (e.g., imiglucerase, avalglucosidase alfa) in lysosomal storage diseases and does not mention or report any data for bromhexine. |
| popPK | Behrens_2026 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of isavuconazole, not bromhexine. |
| popPK | Darwish_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for remlifanserin, not bromhexine. |
| popPK | Dodeja_2026 | irrelevant | 0 | 0 | The paper is a general review of lactation pharmacokinetics and does not mention or provide data for bromhexine. |
| PGx | Dube_2017 | not_relevant | 0 | 0 | The paper evaluates bromhexine biotransformation using fungal and rat liver microsomal models in vitro; it does not report any pharmacogenomic effects (gene variants/genotypes) on PK/PD parameters in humans. |
| popPK | El-Gendy_2025 | irrelevant | 0 | 0 | The study is a pharmacodynamic/therapeutic efficacy investigation in dogs, reporting no pharmacokinetic parameters for bromhexine. |
| popPK | Fukae_2024 | irrelevant | 0 | 0 | The paper investigates the pharmacokinetics of valemetostat, not bromhexine. |
| popPK | Gao_2026 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for Trastuzumab Rezetecan (an antibody-drug conjugate), not bromhexine. |
| popPK | Hernández-Gago_2026 | irrelevant | 0 | 0 | The paper is a systematic review of dosing strategies for high-alert medications in obese pediatric patients and does not mention bromhexine or provide any PK parameters for it. |
| popPK | Huang_2026 | irrelevant | 0 | 0 | The study is a methodological simulation of automated PopPK modeling algorithms using generic datasets and does not involve bromhexine. |
| popPK | Jian_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of Pegbing (peginterferon alpha-2b), not bromhexine. |
| popPK | Jian_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of Pegbing (peginterferon alfa-2b), not bromhexine. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of 17-DMAG, quetiapine, clozapine, and ziprasidone, and does not involve bromhexine. |
| popPK | Methaneethorn_2025 | irrelevant | 0 | 0 | The paper is a systematic review regarding the population pharmacokinetics of azithromycin, and does not report data for bromhexine. |
| popPK | Qin_2026 | irrelevant | 0 | 0 | The study characterizes the population pharmacokinetics of ropeginterferon alfa-2b, not bromhexine. |
| popPK | Rega_2026 | irrelevant | 0 | 0 | The study focuses on methotrexate pharmacokinetics, not bromhexine. |
| popPK | Sethuramalingam_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of asparaginase (native and pegylated), not bromhexine. |
| popPK | Shahraz_2026 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for savolitinib, not bromhexine. |
| popPK | Sun_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for bictegravir, not bromhexine. |
| popPK | Ter_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and dosing optimization of crovalimab, not bromhexine. |
| popPK | Tiraboschi_2025 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for amlitelimab (a monoclonal antibody), not bromhexine. |
| popPK | Toukam_2026 | irrelevant | 0 | 0 | The paper concerns the pharmacokinetics of BIIB107, not bromhexine. |
| popPK | Umpiérrez_2026 | irrelevant | 0 | 0 | The study focuses on tacrolimus pharmacokinetics, not bromhexine. |
| popPK | Vandecasteele-Thienpont_1980 | relevant | 9 | 0 | The paper is a pharmacokinetic study of bromhexine in dogs, but the abstract provided contains no quantitative parameter values (such as clearance, volume, or half-life). |
| popPK | Vicente_2026 | irrelevant | 0 | 0 | The paper is a population pharmacokinetic study of infliximab, a monoclonal antibody, and contains no data or parameters for bromhexine. |
| popPK | Wu_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for bosutinib, not bromhexine. |
| popPK | Xu_2026 | irrelevant | 0 | 0 | The paper focuses entirely on the pharmacokinetics and population modeling of sarilumab, not bromhexine. |
| popPK | Yamada_2025 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for 5-fluorouracil and oxaliplatin, not bromhexine. |
| popPK | Yang_2000 | irrelevant | 1 | 0 | The abstract describes the pharmacokinetic study and mentions the model type (one compartment) but does not provide any specific numeric parameter values (such as CL, Vd, or t1/2). |
| popPK | Yang_2025 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for osimertinib and its metabolite AZ5104, not bromhexine. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 22:43 UTC</sub>
