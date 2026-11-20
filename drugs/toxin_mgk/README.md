<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Household toxins&quot;,&quot;href&quot;:&quot;toxins/HOUS.md&quot;},{&quot;label&quot;:&quot;MGK&quot;}]"></div>

# MGK

- **generic name:** MGK
- **T3DB:** [T3D3885](http://www.t3db.ca/toxins/T3D3885) · **PubChem:** [CID 8227](https://pubchem.ncbi.nlm.nih.gov/compound/8227)

## About

N-Octyl bicycloheptene dicarboximide (MGK 264) is an ingredient in some common pesticides. It has no intrinsic pesticidal activity itself, but rather is a synergist enhancing the potency of pyrethroid ingredients. It is used in a variety of household and veterinary products

- **Category:** Household Toxin, Synthetic Toxin
- **Sources and uses:** It is used in a variety of household and veterinary products.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D3885">T3DB T3D3885</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 113-48-4</small></p>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-19 14:34 | 10:38 | 0/0/0 | 0/0/0 | 0/0/0 | 108,996/4,214 | einfracz / qwen3.8-flash-next | 5 | 2/3 | 5/0 | 0 |

## Coverage

- **PubMed hits:** 24 matched, 31 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bachmann_1989 | irrelevant | 0 | 0 | The paper does not mention mgk; it studies other drugs (carbamazepine, quinidine, etc.) as probes for hepatic metabolism. |
| popPK | Benchaoui_1996 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for fenbendazole and piperonyl butoxide, with no mention of mgk or its metabolites. |
| popPK | Duthaler_2021 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for ivermectin and other drugs in mosquitoes, but does not mention or study mgk (methoxyfenozide or similar). |
| popPK | Fonseca_2021 | irrelevant | 0 | 0 | The paper investigates contrast-induced acute kidney injury using meglumine ioxithalamate as the contrast agent, not MGK (Methylglyoxal), and reports no toxicokinetic parameters. |
| popPK | Fossati_1986 | irrelevant | 0 | 0 | The paper reports toxicity/repellency efficacy (ED50/ED90) for insects and humans, not quantitative toxicokinetic parameters such as half-lives, clearance, or partition coefficients. |
| popPK | Greeley_1980 | irrelevant | 0 | 0 | The paper studies Ritalin (methylphenidate) and thyroid hormones, with no mention of MGK or any kinetic parameters for it. |
| popPK | Jenkins_2023 | irrelevant | 0 | 0 | The paper reports toxicokinetic parameters for piperonyl butoxide (PBO), not MGK (metofluthrin or related pyrethroid), so MGK is not the subject substance. |
| popPK | Karara_1988 | irrelevant | 0 | 0 | The paper concerns the toxicokinetics of di-2-ethylhexyl phthalate (DEHP) in sheepshead minnow, not MGK; the subject substance is completely different. |
| popPK | Kramer_1986 | irrelevant | 0 | 0 | The paper studies MeCCNU (semustine), a different substance from mgk, and does not provide any kinetic parameters for mgk. |
| popPK | Kumbhakar_2016 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of albendazole and piperonyl butoxide in goats, with no mention or data for MGK (Metofluthrin or similar). |
| popPK | Kuo_1982 | irrelevant | 0 | 0 | The paper discusses cephaloridine toxicity and does not mention mgk or provide any kinetic parameters for it. |
| popPK | Machado_2022 | irrelevant | 0 | 0 | The paper focuses on curcumin's renoprotective effects in diabetic rats, with no mention or kinetic data for mgk. |
| popPK | McKellar_2002 | irrelevant | 0 | 0 | The paper focuses entirely on fenbendazole pharmacokinetics in horses; mgk is not mentioned or studied. |
| popPK | Mosallanejad_2008 | irrelevant | 0 | 0 | The paper concerns methoxyfenozide and 20-hydroxyecdysone in Spodoptera exigua cells, not mgk, and reports no toxicokinetic parameters for mgk. |
| popPK | Orszulak-Michalak_1996 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of verapamil and the influence of anesthetics (thiopental, ketamine, propofol) on it, with no mention or data regarding mgk. |
| popPK | Osimitz_2022 | irrelevant | 0 | 0 | no_text gate: only 64 chars of text extracted (&lt; 400) |
| popPK | Palma-Aguirre_1989 | irrelevant | 0 | 0 | The paper reports toxicokinetic parameters for nifedipine, not MGK, and MGK is not mentioned in the provided evidence. |
| popPK | Podowski_1991 | irrelevant | 0 | 0 | The paper studies hexachlorocyclopentadiene, not mgk, so the toxicokinetic parameters do not pertain to the target substance. |
| popPK | Rivera-González_2021 | irrelevant | 0 | 0 | The paper is a review of piperonyl butoxide, a different substance, and contains no data for mgk. |
| popPK | Rutledge_1994 | irrelevant | 0 | 0 | The paper is an efficacy study on mosquito repellents where MGK Repellent 11 is only one of several test substances; no toxicokinetic parameters are reported. |
| popPK | Sanchez-Arroyo_2001 | irrelevant | 0 | 0 | The paper reports toxicokinetic data for propoxur, not MGK-264 (MGK); MGK is not the subject substance. |
| popPK | Sseguya_2026 | irrelevant | 0 | 0 | The paper discusses malaria transmission modeling and insecticide resistance dynamics, not the toxicokinetics of MGK. |
| popPK | Uto_2015 | irrelevant | 0 | 0 | The term 'MgK' refers to megakaryocytes in this context, not a chemical substance, and the paper studies eltrombopag, a completely different drug. |
| popPK | Wilson_1996 | irrelevant | 0 | 0 | The paper studies toluene diamine, not mgk (MeGly), and contains no toxicokinetic parameters for mgk. |
| popPK | Zhang_2021 | irrelevant | 0 | 0 | MGK is a peptide sequence (Met-Gly-Lys) used as a control group, not the toxic substance of interest, and no toxicokinetic parameters for mgk are reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmgk%5D&body=Drug%3A%20mgk%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_mgk/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
