<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;acepromazine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Acepromazine_Garbin2022_reference&quot;,&quot;label&quot;:&quot;Garbin_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_acepromazine/Acepromazine_Garbin2022_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Acepromazine_Steagall2026_reference&quot;,&quot;label&quot;:&quot;Steagall_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_acepromazine/Acepromazine_Steagall2026_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# acepromazine

- **generic name:** acepromazine
- **ATC codes:** `N05AA04`
- **DrugBank:** [DB01614](https://go.drugbank.com/drugs/DB01614) · **PubChem:** [CID 6077](https://pubchem.ncbi.nlm.nih.gov/compound/6077)
- **molar mass:** 326.456 g/mol (C19H22N2OS) — DrugBank
- **groups:** investigational, vet_approved

## About

Acepromazine is a phenothiazine antipsychotic and dopamine antagonist. It is approved for veterinary use and remains investigational in humans, so it is not used in routine human medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q425097](https://www.wikidata.org/wiki/Q425097) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| acepromazine | parent | 326.456 | C19H22N2OS | DrugBank | [6077](https://pubchem.ncbi.nlm.nih.gov/compound/6077) | Hashem_1992, Hashem_1993, McGree_2013 |
| 2-(1-hydroxyethyl)promazine | metabolite | 345 | — | the paper | — | McGree_2013 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 14:53 | 5:38 | 0/2/3 | 3/0/0 | 0/0/1 | 185,944/13,193 | ollama / glm-5.3-flash | 8 | 1/5 | 8/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.9). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (cat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cat</span><br><sub>blocking: unreported model parameter default(s): ka</sub><br><sub>route_to: `scholar`</sub> | [Garbin_2022_reference](drugs/drug_acepromazine/Acepromazine_Garbin2022_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Garbin M et al., Pharmacokinetics of Bupivacaine Followi…, Pharmaceutics (2022) | [10.3390/pharmaceutics14081548](https://doi.org/10.3390/pharmaceutics14081548) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.286). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [McGree_2013_reference](drugs/drug_acepromazine/Acepromazine_McGree2013_reference.md) | — | 1-compartment (no model) | 1 | McGree JM et al., A Bayesian approach for estimating dete…, Journal of veterinary pharm… (2013) | [10.1111/j.1365-2885.2013.01389.x](https://doi.org/10.1111/j.1365-2885.2013.01389.x) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.125). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (cat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cat</span><br><sub>blocking: unreported model parameter default(s): ka</sub><br><sub>route_to: `scholar`</sub> | [Steagall_2026_reference](drugs/drug_acepromazine/Acepromazine_Steagall2026_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Steagall PV et al., Pharmacokinetics of bupivacaine after b…, Journal of feline medicine… (2026) | [10.1177/1098612X251407158](https://doi.org/10.1177/1098612X251407158) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Hashem_1992_reference](drugs/drug_acepromazine/Acepromazine_Hashem1992_reference.md) | — | 1-compartment (no model) | 2 | Hashem A et al., [The pharmacokinetics and bioavailabili…, DTW. Deutsche tierarztliche… (1992) | — |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.2). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Hashem_1993_reference](drugs/drug_acepromazine/Acepromazine_Hashem1993_reference.md) | — | 1-compartment (no model) | 5 | Hashem A et al., Disposition, bioavailability and clinic…, Journal of veterinary pharm… (1993) | [10.1111/j.1365-2885.1993.tb00183.x](https://doi.org/10.1111/j.1365-2885.1993.tb00183.x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 0.90).">horse</span> | [Calloe_2019_Kv11_1_current](drugs/drug_acepromazine/pd_Calloe_2019_Kv11_1_current.md) | equine Kv11.1 current inhibition ← acepromazine maleate · inhibition effect | — | Calloe K et al., Compounds commonly used in equine medic…, Research in veterinary scie… (2019) | [10.1016/j.rvsc.2019.01.009](https://doi.org/10.1016/j.rvsc.2019.01.009) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Joo_2017_Itail](drugs/drug_acepromazine/pd_Joo_2017_Itail.md) | hERG peak tail currents (activated states) ← acepromazine · direct sigmoid Emax (Hill) effect | — | Joo YS et al., Acepromazine inhibits hERG potassium io…, The Korean journal of physi… (2017) | [10.4196/kjpp.2017.21.1.75](https://doi.org/10.4196/kjpp.2017.21.1.75) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Joo_2017_Itail_2](drugs/drug_acepromazine/pd_Joo_2017_Itail_2.md) | hERG tail currents (open state block) ← acepromazine · direct sigmoid Emax (Hill) effect | — | Joo YS et al., Acepromazine inhibits hERG potassium io…, The Korean journal of physi… (2017) | [10.4196/kjpp.2017.21.1.75](https://doi.org/10.4196/kjpp.2017.21.1.75) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span> | [Sedrish_1999_Relaxation_of_NE_contracted_large_colon_arterial_and_venous_rings](drugs/drug_acepromazine/pd_Sedrish_1999_Relaxation_of_NE_contracted_large_colon_arteria.md) | Relaxation of NE-contracted large colon arterial and venous rings ← acepromazine · stimulation effect | — | Sedrish SA et al., In vitro response of large colon arteri…, American journal of veterin… (1999) | — |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 1.00).">dog</span> | **ABCB1** | `Q351` · CLm/F | transport | [Deshpande_2016](drugs/drug_acepromazine/pgx_Deshpande_2016_ABCB1_Q351.md) | Deshpande D et al., The Effect of the Canine ABCB1-1Δ Mutat…, Journal of veterinary inter… (2016) | [10.1111/jvim.13827](https://doi.org/10.1111/jvim.13827) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 42 matched, 42 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 5  ·  extracted 0  ·  needs_review 3  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hashem_1992.pdf` | Hashem A et al., [The pharmacokinetics and bioavailabili…, DTW. Deutsche tierarztliche… (1992) | popPK | 9 | not captured | [1425314](https://pubmed.ncbi.nlm.nih.gov/1425314) | Original PK study of acepromazine in dogs with numeric half-lives and bioavailability reported in the abstract, though full parameter set (CL, V) may be in the paper body not shown. |
| `Hashem_1993.pdf` | Hashem A et al., Disposition, bioavailability and clinic…, Journal of veterinary pharm… (1993) | popPK | 8 | [10.1111/j.1365-2885.1993.tb00183.x](https://doi.org/10.1111/j.1365-2885.1993.tb00183.x) | [8230407](https://pubmed.ncbi.nlm.nih.gov/8230407) | Original PK study in horses with numeric disposition parameters (half-lives, tmax, Cmax, bioavailability) reported directly in the abstract, though CL/V values are not shown. |

<sub>queue written 2026-10-06T14:51:28.535522+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abass_1994 | irrelevant | 1 | 2 | The PK parameters reported (CL, V, half-lives) are for thiopentone, not acepromazine, which is only a pre-medication agent. |
| popPK | Baxter_1989 | irrelevant | 0 | 0 | In vitro vascular reactivity study measuring EC50 vasodilation, not pharmacokinetic disposition parameters for acepromazine. |
| popPK | Cardozo_2024 | irrelevant | 0 | 0 | Acepromazine is only used as premedication; no PK parameters are reported. |
| popPK | Choi_2014 | irrelevant | 2 | 1 | Environmental soil dissipation kinetics of acepromazine, not pharmacokinetic disposition parameters in a living subject; no numeric PK values present. |
| popPK | Garbin_2022 | irrelevant | 0 | 0 | This is a pharmacokinetic study of bupivacaine in cats; acepromazine is only a co-administered sedative in the anesthetic protocol, with no acepromazine PK parameters reported. |
| popPK | Hatz_2015 | irrelevant | 0 | 0 | This is a blood pressure measurement validation study in horses; acepromazine is only a premedication, with no PK parameters reported. |
| popPK | Joo_2017 | irrelevant | 0 | 0 | In-vitro electrophysiology (hERG channel blockade in HEK293 cells); no PK disposition parameters for acepromazine, only cited Cmax values from other studies. |
| popPK | Keating_2016 | irrelevant | 2 | 3 | Acepromazine is only a co-administered sedative; the PK parameters reported (CL, Vc) are for fentanyl, not acepromazine itself. |
| popPK | Micieli_2018 | irrelevant | 0 | 0 | This is a pharmacodynamic comparison of ocular effects in dogs; no PK parameters for acepromazine are reported. |
| popPK | Sedlacik_2015 | irrelevant | 0 | 0 | Acepromazine is only a component of the anesthetic regimen; no PK parameters for it are reported. |
| popPK | Sedrish_1999 | irrelevant | 0 | 0 | In vitro vascular pharmacodynamics study; acepromazine is one of several vasodilators tested, no PK disposition parameters reported. |
| popPK | Steagall_2026 | irrelevant | 0 | 0 | This is a pharmacokinetic study of bupivacaine in cats; acepromazine is only a co-administered sedative premedication with no acepromazine PK parameters reported. |
| popPK | de_2026 | irrelevant | 0 | 0 | This is a sedative/cardiovascular comparison study in dogs with no pharmacokinetic parameters (no CL, V, ka, half-life, or PK model) for acepromazine; plasma concentrations were not even measured. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 14:51 UTC</sub>
