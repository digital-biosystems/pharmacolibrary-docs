<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;artemotil&quot;}]"></div>

# artemotil

- **generic name:** artemotil
- **ATC codes:** `P01BE04`
- **DrugBank:** [DB13851](https://go.drugbank.com/drugs/DB13851) · **PubChem:** not captured
- **molar mass:** 312.406 g/mol (C17H28O5) — DrugBank
- **groups:** approved

## About

Artemotil is an artemisinin-derivative antimalarial used to treat malaria. It is an approved antimalarial, though it does not appear to be authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q72443831](https://www.wikidata.org/wiki/Q72443831) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| arteether | parent | 312.406 | C17H28O5 | DrugBank | — | Benakis_1991 |
| artemotil | parent | 312.406 | C17H28O5 | DrugBank | — | Benakis_1991 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 18:47 | 6:26 | 0/1/0 | 2/0/0 | 0/0/0 | 164,651/4,345 | einfracz / qwen3.8-27b | 6 | 0/4 | 6/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.143). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Benakis_1991_reference](drugs/drug_artemotil/Artemotil_Benakis1991_reference.md) | — | 1-compartment (no model) | 5 | Benakis A et al., Pharmacokinetics of arteether in dog, European journal of drug me… (1991) | [10.1007/BF03189978](https://doi.org/10.1007/BF03189978) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Sabarinath_2005_inhibition](drugs/drug_artemotil/pd_Sabarinath_2005_inhibition.md) | Plasmodium falciparum inhibition ← arteether · inhibition effect | — | Sabarinath SN et al., Clinical pharmacokinetics of the diaste…, Clinical pharmacokinetics (2005) | [10.2165/00003088-200544110-00006](https://doi.org/10.2165/00003088-200544110-00006) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Data from bacteria, fungi or plants, not measured in people (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 1.00).">other organism</span> | [Zidovetzki_1993_Phospholipase_A2](drugs/drug_artemotil/pd_Zidovetzki_1993_Phospholipase_A2.md) | Phospholipase A2 ← arteether · inhibition effect | — | Zidovetzki R et al., Inhibition of Plasmodium falciparum pho…, The Journal of parasitology (1993) | — |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 80 matched, 70 returned
- **screened:** 2  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Li_2004.pdf` | Li Q et al., Pharmacokinetic investigation on the th…, The American journal of tro… (2004) | popPK | 9 | not captured | [15642961](https://pubmed.ncbi.nlm.nih.gov/15642961) | The study reports quantitative pharmacokinetic parameters (Cmax, half-life, AUC) for artemotil in humans, with specific values present in the provided abstract. |
| `Looareesuwan_2002.pdf` | Looareesuwan S et al., Dose-finding and efficacy study for i.m…, British journal of clinical… (2002) | popPK | 9 | [10.1046/j.1365-2125.2002.01590.x](https://doi.org/10.1046/j.1365-2125.2002.01590.x) | [11994055](https://pubmed.ncbi.nlm.nih.gov/11994055) | The study investigates the pharmacokinetics of artemotil, but the specific quantitative parameter values are not present in the provided abstract text. |
| `Zidovetzki_1993.pdf` | Zidovetzki R et al., Inhibition of Plasmodium falciparum pho…, The Journal of parasitology (1993) | pd | 4 | not captured | [8331477](https://www.ncbi.nlm.nih.gov/pubmed/8331477) | metadata signals extractable PD data (IC50) |
| `Zidovetzki_1994.pdf` | Zidovetzki R et al., Inhibition of Plasmodium falciparum lys…, Parasitology (1994) | pd | 4 | [10.1017/s0031182000076095](https://doi.org/10.1017/s0031182000076095) | [8022653](https://www.ncbi.nlm.nih.gov/pubmed/8022653) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-14T18:46:34.647274+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alia_2020 | irrelevant | 1 | 0 | The study focuses on artemisinin and other antimalarials using computational methods to correlate lipophilicity with half-life, and does not report PK parameters for artemotil. |
| PGx | Asimus_2007 | not_relevant | 0 | 0 | The paper investigates CYP450 enzyme modulation by artemisinins in healthy subjects but does not report on the effect of specific gene variants or genotypes on artemisinin pharmacokinetics or pharmacodynamics. |
| popPK | Asthana_2001 | irrelevant | 0 | 0 | The study focuses on a different drug (Arteether) for malaria treatment and reports clinical outcomes, not pharmacokinetic parameters for artemotil. |
| popPK | Benakis_1991 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of arteether, a different drug, not artemotil. |
| PGx | Burk_2012 | not_relevant | 0 | 0 | The study investigates the mechanism of drug-drug interactions via CAR receptor activation but does not report pharmacogenomic effects (genotype-dependent changes) on PK/PD parameters. |
| popPK | Chhonker_2017 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of α/β-arteether and sulfadoxine-pyrimethamine, not artemotil. |
| popPK | Egwu_2022 | irrelevant | 0 | 0 | The paper is a review discussing malaria control strategies, drug access, and resistance mechanisms, and does not contain any quantitative pharmacokinetic data for artemotil or other specific drugs. |
| PGx | Ekins_1999 | not_relevant | 0 | 0 | The paper focuses on 3D-QSAR models for CYP2B6 substrates in general and mentions arteether, but it does not report any pharmacogenomic gene variant effects on the pharmacokinetics or pharmacodynamics of artemotil. |
| popPK | Elsherbiny_2008 | irrelevant | 0 | 0 | The study assesses the pharmacokinetics of the probe drug mephenytoin and its metabolites to evaluate enzyme induction by artemisinin derivatives, not the pharmacokinetic parameters of artemotil itself. |
| PGx | Elsherbiny_2008 | not_relevant | 0 | 0 | The paper focuses on the induction of CYP enzymes by artemisinins in a general population and does not report any pharmacogenomic effects (gene variants) on the PK/PD of the drug. |
| popPK | Govindan_2022 | irrelevant | 0 | 0 | The paper is an efficacy study on arteether in pregnant mice and contains no pharmacokinetic or pharmacodynamic parameter data for artemotil. |
| PGx | Grace_1998 | not_relevant | 0 | 0 | The study investigates the metabolism of beta-arteether and the specific P450 enzymes involved, but does not report how a specific gene variant or genotype alters the pharmacokinetic or pharmacodynamic parameters of the drug. |
| PGx | Haq_2009 | not_relevant | 0 | 0 | The paper describes a case of drug-induced mania (adverse event) and discusses family history but does not report quantitative changes in PK or PD parameters based on specific gene variants. |
| popPK | Joshi_2026 | irrelevant | 0 | 0 | The study evaluates neuroprotective drugs in cerebral malaria and does not involve artemotil or its pharmacokinetics. |
| popPK | Li_1998 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of dihydroartemisinin, artemether, arteether, artesunic acid, and artelinic acid, not artemotil. |
| popPK | Looareesuwan_2002 | relevant | 9 | 0 | The study investigates the pharmacokinetics of artemotil, but the specific quantitative parameter values are not present in the provided abstract text. |
| popPK | Magueur_2004 | irrelevant | 0 | 0 | The paper describes the synthesis and in-vitro/in-vivo biological activity (antimalarial efficacy) of analogues of artemether and artesunate, not the pharmacokinetics of artemotil. |
| popPK | Mishra_1995 | irrelevant | 0 | 0 | The paper studies the clinical efficacy of alpha,beta-arteether, not the pharmacokinetics of artemotil. |
| popPK | Mohanty_1997 | irrelevant | 0 | 0 | The study is a clinical efficacy trial for arteether (not artemotil) and does not report any pharmacokinetic parameters. |
| popPK | Moyou-Somo_2001 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the efficacy of arteether (not artemotil) for cerebral malaria and does not report pharmacokinetic parameters. |
| popPK | Navaratnam_2000 | irrelevant | 1 | 0 | This is a review article summarizing general pharmacokinetic knowledge of artemisinin-type compounds, including artemotil, but it does not report original quantitative parameters (CL, V, Q, ka) or specific population PK model estimates for artemotil. |
| PGx | Ooko_2015 | not_relevant | 1 | 3 | The paper investigates the association between iron-related gene expression and cytotoxicity (IC50) in cancer cell lines, not a specific human pharmacogenomic variant effect on pharmacokinetic or pharmacodynamic parameters of the specific drug artemotil (which is not even tested in this study). |
| popPK | Pareek_2006 | irrelevant | 0 | 0 | The study evaluates the efficacy and safety of arteether formulations in malaria treatment but does not report pharmacokinetic parameters (CL, V, etc.) for artemotil. |
| popPK | Rathi_2024 | irrelevant | 0 | 0 | The paper describes antimalarial efficacy studies of novel azaartemisinin derivatives in mice, not pharmacokinetic studies of artemotil. |
| popPK | Sabarinath_2005_2 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of arteether (and its metabolite dihydroartemisinin) in rats, not artemotil. |
| popPK | Singh_1998 | irrelevant | 0 | 0 | The study evaluates the clinical efficacy of alpha-beta arteether (not artemotil) in treating malaria and reports parasite clearance times rather than pharmacokinetic parameters. |
| popPK | Srivastava_2001 | irrelevant | 0 | 0 | The paper focuses on the effect of beta-arteether on methemoglobin reductase in malaria-infected mice and does not contain any population-pharmacokinetic parameters for artemotil. |
| popPK | Staehli_2013 | irrelevant | 0 | 0 | The study focuses on artemether, artesunate, and dihydroartemisinin, not artemotil, which is not mentioned or measured in the evidence. |
| popPK | Tan_2009 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of artesunate and its metabolite dihydroartemisinin, not the drug artemotil. |
| popPK | Thuma_2000 | irrelevant | 0 | 0 | The paper is a clinical efficacy and safety trial reporting clinical outcomes, not pharmacokinetic parameters. |
| PGx | Tripathi_2013 | not_relevant | 2 | 5 | The paper reports a drug-drug interaction (ketoconazole inhibiting CYP3A4) affecting artemether's PK, but it does not report a pharmacogenomic effect based on a specific gene variant or genotype. |
| popPK | Valecha_1997 | irrelevant | 0 | 0 | The study evaluates the efficacy of alpha,beta-arteether (an ethyl derivative of artemisinin) in treating malaria, not the pharmacokinetics of artemotil. |
| popPK | Vathsala_2012 | irrelevant | 0 | 0 | The study focuses on the immunomodulatory effects and parasite clearance dynamics of an artemether-curcumin combination, not the quantitative pharmacokinetic parameters (CL, V, t1/2) of the artemisinin derivative. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 18:46 UTC</sub>
