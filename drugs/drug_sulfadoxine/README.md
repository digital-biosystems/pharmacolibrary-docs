<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;Sulfadoxine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Sulfadoxine_Trenque2004_reference&quot;,&quot;label&quot;:&quot;Trenque_2004_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sulfadoxine/Sulfadoxine_Trenque2004_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sulfadoxine_Corvaisier2004_reference&quot;,&quot;label&quot;:&quot;Corvaisier_2004_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sulfadoxine/Sulfadoxine_Corvaisier2004_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sulfadoxine_de2018_reference&quot;,&quot;label&quot;:&quot;de_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sulfadoxine/Sulfadoxine_de2018_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# Sulfadoxine

- **generic name:** Sulfadoxine
- **ATC codes:** `P01BF09`
- **DrugBank:** [DB01299](https://go.drugbank.com/drugs/DB01299) · **PubChem:** [CID 17134](https://pubchem.ncbi.nlm.nih.gov/compound/17134)
- **molar mass:** 310.329 g/mol (C12H14N4O4S) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Sulfadoxine is a sulfonamide antibiotic used as an antimalarial against Plasmodium falciparum malaria and also to treat pneumocystosis. It is used in combination with artemisinin derivatives for malaria, though some products have been withdrawn in certain markets.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q411557](https://www.wikidata.org/wiki/Q411557) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| sulfadoxine | parent | 310.329 | C12H14N4O4S | DrugBank | [17134](https://pubchem.ncbi.nlm.nih.gov/compound/17134) | Corvaisier_2004, Trenque_2004, de_2017, de_2018 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:51 | 4:53 | 1/1/2 | 1/1/0 | 0/0/0 | 239,114/19,132 | ollama / glm-5.3-flash | 6 | 0/6 | 6/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed</span> | [Trenque_2004_reference](drugs/drug_sulfadoxine/Sulfadoxine_Trenque2004_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Trenque T et al., Population pharmacokinetics of pyrimeth…, British journal of clinical… (2004) | [10.1111/j.1365-2125.2004.02077.x](https://doi.org/10.1111/j.1365-2125.2004.02077.x) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.167). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: unreported model parameter default(s): F</sub><br><sub>route_to: `scholar`</sub> | [Corvaisier_2004_reference](drugs/drug_sulfadoxine/Sulfadoxine_Corvaisier2004_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | Corvaisier S et al., Population pharmacokinetics of pyrimeth…, Antimicrobial agents and ch… (2004) | [10.1128/AAC.48.10.3794-3800.2004](https://doi.org/10.1128/AAC.48.10.3794-3800.2004) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>blocking: T1_cmax</sub><br><sub>route_to: `scholar`</sub> | [de_2018_reference](drugs/drug_sulfadoxine/Sulfadoxine_de2018_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 (+1 cov.) | de Kock M et al., Population Pharmacokinetic Properties o…, Antimicrobial agents and ch… (2018) | [10.1128/AAC.01370-17](https://doi.org/10.1128/AAC.01370-17) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.706). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C2 negative clearance/volume in a covariate scenario or base (implausible — bas…</sub><br><sub>route_to: `human_review`</sub> | [de_2017_reference](drugs/drug_sulfadoxine/Sulfadoxine_de2017_reference.md) | — | 2-compartment (no model) | 9 | de Kock M et al., Pharmacokinetics of Sulfadoxine and Pyr…, CPT: pharmacometrics & syst… (2017) | [10.1002/psp4.12181](https://doi.org/10.1002/psp4.12181) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Nour_2006_inhibition_of_schizont_maturation_Plasmodium_falciparum](drugs/drug_sulfadoxine/pd_Nour_2006_inhibition_of_schizont_maturation_Plasmodium_falci.md) | inhibition of schizont maturation (Plasmodium falciparum) ← sulfadoxine/pyrimethamine · inhibition effect | — | Nour BY et al., In vitro study assessing the response o…, Saudi medical journal (2006) | — |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Benito_1995_in_vitro_susceptibility_of_Plasmodium_falciparum_to_sulfadoxine_pyrimethamine](drugs/drug_sulfadoxine/pd_Benito_1995_in_vitro_susceptibility_of_Plasmodium_falciparum.md) | in vitro susceptibility of Plasmodium falciparum to sulfadoxine/pyrimethamine ← sulfadoxine/pyrimethamine · direct log-linear effect | — | Benito A et al., In vitro susceptibility of Plasmodium f…, The American journal of tro… (1995) | [10.4269/ajtmh.1995.53.526](https://doi.org/10.4269/ajtmh.1995.53.526) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 41 matched, 20 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 1  ·  needs_review 2  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Corvaisier_2004.pdf` | Corvaisier S et al., Population pharmacokinetics of pyrimeth…, Antimicrobial agents and ch… (2004) | popPK | 10 | [10.1128/AAC.48.10.3794-3800.2004](https://doi.org/10.1128/AAC.48.10.3794-3800.2004) | [15388436](https://pubmed.ncbi.nlm.nih.gov/15388436) | Population PK of sulfadoxine in children with numeric parameters (ka, V, ke, half-life) reported directly in the abstract. |
| `Trenque_2004.pdf` | Trenque T et al., Population pharmacokinetics of pyrimeth…, British journal of clinical… (2004) | popPK | 10 | [10.1111/j.1365-2125.2004.02077.x](https://doi.org/10.1111/j.1365-2125.2004.02077.x) | [15151519](https://pubmed.ncbi.nlm.nih.gov/15151519) | Population PK model for sulfadoxine with numeric CL and V values reported directly in the abstract. |
| `Salman_2011.pdf` | Salman S et al., Pharmacokinetic properties of conventio…, Antimicrobial agents and ch… (2011) | popPK | 9 | [10.1128/AAC.01075-10](https://doi.org/10.1128/AAC.01075-10) | [21282434](https://pubmed.ncbi.nlm.nih.gov/21282434) | Population PK two-compartment model of sulfadoxine in infants is described, but numeric CL/V parameter values are not in the evidence (only half-life and AUC appear; full parameters likely in tables/supplement not provided). |
| `Bell_2011.pdf` | Bell DJ et al., Population pharmacokinetics of sulfadox…, Clinical pharmacology and t… (2011) | popPK | 8 | [10.1038/clpt.2010.297](https://doi.org/10.1038/clpt.2010.297) | [21191379](https://pubmed.ncbi.nlm.nih.gov/21191379) | Population PK model of sulfadoxine in children is clearly the subject, but the abstract contains no numeric parameter values, which likely reside in tables/figures not provided. |

<sub>queue written 2026-10-07T08:47:48.849207+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Arshad_2020 | irrelevant | 2 | 1 | Sulfadoxine is only one of many repurposed drugs compared against EC50/EC90; no PK disposition parameters (CL, V, half-life, model) for sulfadoxine are reported, and Cmax values live in figures/tables not provided. |
| popPK | Bell_2011 | relevant | 8 | 2 | Population PK model of sulfadoxine in children is clearly the subject, but the abstract contains no numeric parameter values, which likely reside in tables/figures not provided. |
| popPK | Benito_1995 | irrelevant | 0 | 0 | In vitro drug-susceptibility study of parasite response, not a pharmacokinetic study of sulfadoxine disposition. |
| popPK | Del_1994 | irrelevant | 0 | 0 | This is an in vitro drug-sensitivity study of P. falciparum; sulfadoxine appears only as a test drug with EC50 values, no PK parameters. |
| popPK | Elati_2026 | irrelevant | 0 | 0 | This is an in vitro drug-efficacy screening study of tubercidin analogues against Toxoplasma gondii; sulfadoxine is only mentioned as a background treatment and no PK parameters are reported. |
| popPK | Karunajeewa_2010 | irrelevant | 2 | 1 | The study models chloroquine/DECQ; sulfadoxine is only co-administered, and no sulfadoxine PK parameter values are reported in the evidence. |
| popPK | Kremsner_1989 | irrelevant | 0 | 0 | In vitro parasite sensitivity study with EC50 values, no PK disposition parameters for sulfadoxine. |
| popPK | Moore_2015 | irrelevant | 1 | 0 | The study models piperaquine breast-milk transfer; sulfadoxine is only a co-administered comparator with no sulfadoxine PK parameters reported. |
| popPK | Nour_2006 | irrelevant | 0 | 0 | In vitro drug-sensitivity (EC50) study of parasite response, not a pharmacokinetic study with disposition parameters for sulfadoxine. |
| popPK | Philipps_1998 | irrelevant | 0 | 0 | In vitro susceptibility (EC50) study of antimalarials, not a pharmacokinetic study of sulfadoxine. |
| popPK | Ramharter_2019 | irrelevant | 0 | 0 | This is a population PK study of mefloquine (and its metabolite), not sulfadoxine; sulfadoxine is only mentioned as the comparator SP-IPTp, and no sulfadoxine parameter values are present. |
| popPK | Salman_2010 | irrelevant | 1 | 0 | This is a population-PK study of azithromycin; sulfadoxine-pyrimethamine is only a co-administered comparator and no sulfadoxine parameter values are reported. |
| popPK | Salman_2011 | relevant | 9 | 4 | Population PK two-compartment model of sulfadoxine in infants is described, but numeric CL/V parameter values are not in the evidence (only half-life and AUC appear; full parameters likely in tables/supplement not provided). |
| popPK | Warsame_1991 | irrelevant | 0 | 0 | In-vitro drug susceptibility study of P. falciparum with EC50 values, not a pharmacokinetic study of sulfadoxine disposition. |
| popPK | de_2020 | irrelevant | 0 | 0 | This is an in-vitro antiviral study of chloroquine–sulfadoxine hybrid compounds against ZIKV; no PK parameters for sulfadoxine itself are reported. |
| popPK | van_2025 | irrelevant | 0 | 0 | This is a systematic review/meta-analysis of IPTp-SP clinical effectiveness and parasite resistance markers, with no pharmacokinetic parameters (CL, V, ka, half-life, or PK model) for sulfadoxine reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 08:48 UTC</sub>
